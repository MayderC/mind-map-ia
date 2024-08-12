import { useUser } from "@/presentation-ui/hooks/useUser";
import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";
import { useTool } from "@/presentation-ui/hooks/useTool";
import { CreateMap, MerMaidMapContextType } from "@/presentation-ui/interfaces";
import { createMapFromSummary, removeMapFromSummary } from "@/presentation-ui/services/maps.service";
import { getSummaries, getSummaryById } from "@/presentation-ui/services/summary.service";
import { IMap } from "@/shared/interfaces/IMap";
import { ISummary } from "@/shared/interfaces/ISummary";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type ToolIAState = "summary" | 'maps';

export const useSummary = () => {

  const searchParams = useSearchParams()
  const summaryId = searchParams.get('summaryId')
  const [currentSummary, setCurrentSummary] = useState<ISummary | null>(null)
  const [stepState, setStepState] = useState<ToolIAState>( summaryId  ? 'maps' : 'summary');
  const [summaries, SetSummaries] = useState<ISummary[]>([])
  const [loadingSummaries, setLoadingSummaries] = useState<boolean>(false)
  const ctx = useUser()

  const merCtx = useMermaidMap()


  useEffect(() => {
    getMapsFromSummaryId(summaryId);
    setStepState(summaryId ? 'maps' : 'summary')
  }, [summaryId]);

  const getMapsFromSummaryId = async (id: string | null) => {
    if (!id) return;
    setLoadingSummaries(true)
    getSummaryById(id).then((response) => {
      if (response.ok) {
        console.log(response)
        setCurrentSummary(response.data);
        setLoadingSummaries(false)
      }
    })
  };

  const onInitGetSummaries = async () => {
    const id = ctx?.user?.user?._id || ""
    getSummaries(id).then((response) => {
      const summaries = response.data
      SetSummaries(summaries)
    })
  }


  useEffect(() => {
    if(!ctx?.user) return 
    onInitGetSummaries()
  }, [ctx?.user]);

  
  const [chart, setChart] = useState('')
  const selectMap = (map: IMap) => {
    if(!map || !merCtx) return
    merCtx.setMap(map)
    setChart(map.mermaidSyntax || "")
  }

  const generateMap = async(data: CreateMap) => {
    data.content = currentSummary?.content || ""
    const id = currentSummary?._id || ""
    const response = await createMapFromSummary(id, data)
    if (response.ok) {
      setCurrentSummary((prevSummary) => {
        if (!prevSummary) return null
          const temp = response.data
          const maps = [{...temp},...(prevSummary.maps || [])].filter((map): map is IMap => map !== null);
          return { ...prevSummary, maps };
      })
    }
  }

  const tool = useTool()

  const [showModal, setShowModal] = useState(false)
  const handleDelete = async(map: MerMaidMapContextType) => {
    //delete map
    if (!merCtx?.map?._id) return
    setShowModal(false)
    const summaryId = currentSummary?._id || ""
    const mapId = merCtx.map._id
    const response = await removeMapFromSummary(summaryId, mapId)
    if (response.ok) {
      merCtx.map = null
      setChart('')
      setCurrentSummary((prevSummary) => {
        if (!prevSummary) return null
        const maps = prevSummary.maps?.filter((map) => map._id !== mapId) || []
        return { ...prevSummary, maps };
      })
    }
  }

  const onDelete = (map: IMap) => {
    if (!merCtx)return
    setShowModal(true)
    merCtx.setMap(map)
  }

  return { 
    currentSummary, 
    stepState, 
    summaries, 
    loadingSummaries,
    merCtx,
    summaryId,
    chart, 
    selectMap, 
    generateMap, 
    tool, 
    showModal,
    onDelete, 
    handleDelete, 
    setShowModal }
}
