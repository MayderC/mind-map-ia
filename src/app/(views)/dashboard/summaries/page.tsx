'use client'
import { SummaryList } from "@/presentation-ui/components/summaries/output/SummaryList";
import { SummaryPreview } from "@/presentation-ui/components/summaries/output/SummaryPreview";
import { useUser } from "@/presentation-ui/context/userContext";
import { getSummaries } from "@/presentation-ui/services/summary.service";
import { ISummary } from "@/shared/interfaces/ISummary";
import { useEffect, useState } from "react";

export default function Summaries(){
  const [summaries, SetSummaries] = useState<ISummary[]>([])
  const ctx = useUser()

  useEffect(() => {
    if(!ctx?.user) return 
    console.log(ctx?.user?.user._id, 'Summary')
    const id = ctx?.user?.user?._id
    console.log(id, "ID ADDED")
    getSummaries(id).then((response) => {
      const summaries = response.data
      SetSummaries(summaries)
    })
  }, [ctx?.user]);

  return (
      <main className="h-[calc(100vh-64px)] gap-5  w-full lg:p-10 p-5 flex justify-between flex-wrap">
        <div className="w-[328px] h-full">
          <SummaryList summaries={summaries} />
        </div>
        <div className="w-[calc(100%-348px)] h-full">
          <SummaryPreview></SummaryPreview>
        </div>
      </main>
  );
}
