'use client'
import { SummaryList } from "@/presentation-ui/components/summaries/output/SummaryList";
import { GenericModal } from "@/presentation-ui/components/modals/GenericModal";
import { SummaryPreview } from "@/presentation-ui/components/summaries/output/SummaryPreview";
import { useUser } from "@/presentation-ui/context/userContext";
import { deleteSummary, getSummaries } from "@/presentation-ui/services/summary.service";
import { ISummary } from "@/shared/interfaces/ISummary";
import { useEffect, useState } from "react";

export default function Summaries(){
  const [summaries, SetSummaries] = useState<ISummary[]>([])
  const ctx = useUser()
  const [showModal, setShowModal] = useState(false)
  const [selectSummary, setSelectSummary] = useState<ISummary | null>(null)
  const [deleteSummaryData, setDeleteSummary] = useState<ISummary | null>(selectSummary)
  const [loading, setLoading] = useState(true)


  const onInitGetSummaries = async () => {
    const id = ctx?.user?.user?._id || ""
    setLoading(true)
    getSummaries(id).then((response) => {
      const summaries = response.data
      SetSummaries(summaries)
      setLoading(false)
    })
  }


  useEffect(() => {
    if(!ctx?.user) return 
    onInitGetSummaries()
  }, [ctx?.user]);


  const handleDelete = async() => {
    if(!ctx?.user) return 
    const userId = ctx?.user?.user?._id
    const summaryId = deleteSummaryData?._id || " "
    deleteSummary(userId, summaryId).then((response) => {
      if(response.ok)onInitGetSummaries()
      setShowModal(false)
    }) 
  }

  const onDelete = (summary: ISummary) => {
    setDeleteSummary(summary)
    setShowModal(true)
  }

  return (
      <main className="h-[calc(100vh-64px)] gap-5  w-full lg:p-10 p-5 flex justify-between flex-wrap">
        <div className="w-[328px] h-full">
          <SummaryList onDelete={onDelete} loading={loading} setSelectSummary={setSelectSummary} summaries={summaries} />
        </div>
        <div className="w-[calc(100%-348px)] h-full">
          <SummaryPreview onDelete={onDelete} summary={selectSummary} ></SummaryPreview>
        </div>
        <GenericModal callback={handleDelete} data={{name: deleteSummaryData?.title || '', type: " summary "}} show={showModal} handleShow={setShowModal} />
      </main>
  );
}
