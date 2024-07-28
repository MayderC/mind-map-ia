import { SummaryInput } from "@/components/summaries/input/SummaryInput";
import { SummaryPreview } from "@/components/summaries/output/SummaryPreview";

export default function AddSummary(){
  return (
      <main className="h-[calc(100vh-64px)] gap-4 w-full lg:p-10 p-5 flex flex-wrap">
        <div className="w-[calc(50%-8px)] h-ful">
        <SummaryInput></SummaryInput>
        </div>
        <div className="w-[calc(50%-8px)] h-full">
          <SummaryPreview></SummaryPreview>
        </div>
      </main>
  );
}
