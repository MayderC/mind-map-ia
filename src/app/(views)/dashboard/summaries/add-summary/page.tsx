"use client"
import { SummaryInput } from "@/presentation-ui/components/summaries/input/SummaryInput";
import { SummaryPreview } from "@/presentation-ui/components/summaries/output/SummaryPreview";
import { ISummary } from "@/shared/interfaces/ISummary";
import { useState } from "react";

export default function AddSummary(){

  const [summary, setSummary] = useState<ISummary>()

  return (
      <main className="h-[calc(100vh-64px)] gap-4 w-full lg:p-10 p-5 flex flex-wrap">
        <div className="w-[calc(50%-8px)] h-full">
        <SummaryInput setSummaryParent={setSummary}></SummaryInput>
        </div>
        <div className="w-[calc(50%-8px)] h-full">
          <SummaryPreview summary={summary}></SummaryPreview>
        </div>
      </main>
  );
}
