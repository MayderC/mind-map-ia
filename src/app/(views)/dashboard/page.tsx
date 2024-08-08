'use client'
import {MermaidV2} from "@/presentation-ui/components/ExcalidrawWraper/MermaidV2";
import { MapListTool } from "@/presentation-ui/components/maps/MapListTool";
import { SummaryListTool } from "@/presentation-ui/components/summaries/output/tool/SummaryListTool";
import { ToolIA } from "@/presentation-ui/components/toolIA/ToolIA";
import { useUser } from "@/presentation-ui/hooks/useUser";
import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";
import { useTool } from "@/presentation-ui/hooks/useTool";
import { CreateMap, MerMaidMapContextType } from "@/presentation-ui/interfaces";
import { createMapFromSummary, removeMapFromSummary } from "@/presentation-ui/services/maps.service";
import { getSummaries, getSummaryById } from "@/presentation-ui/services/summary.service";
import { IMap } from "@/shared/interfaces/IMap";
import { ISummary } from "@/shared/interfaces/ISummary";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { GenericModal } from "@/presentation-ui/components/modals/GenericModal";
// import Mermaid from "react-mermaid2"


const ExcalidrawWrapper = dynamic(
  async () => (await import("@/presentation-ui/components/ExcalidrawWraper/Excalidrawrapper")).default,
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

type ToolIAState = "summary" | 'maps';

function Tool(){
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

  return (
      <main className="min-[calc(100vh-64px)] h-[calc(100vh-70px)] w-full relative">
        {(summaryId && merCtx?.map?._id) ? <MermaidV2 markup={chart}/> : <ExcalidrawWrapper />}
        <>
          { tool?.show && 
            <ToolIA>
            {(stepState == 'maps') && currentSummary  
              ? <MapListTool 
                  generateMap={generateMap} 
                  loading={loadingSummaries} 
                  setSelctMap={selectMap} 
                  maps={currentSummary?.maps || []}
                  onDelete={onDelete}
                />
              : <SummaryListTool  
                  summaries={summaries} 
                  loading={loadingSummaries}
                />
            }
            </ToolIA>
          }
        </>
        <GenericModal callback={handleDelete} data={{name: merCtx?.map?.title || '', type: " map "}} show={showModal} handleShow={setShowModal} />
      </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Tool />
    </Suspense>
  );
}