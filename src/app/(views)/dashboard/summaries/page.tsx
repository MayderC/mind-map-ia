import { GenericModal } from "@/presentation-ui/components/models/GenericModal";
import { SummaryList } from "@/presentation-ui/components/summaries/output/SummaryList";
import { SummaryPreview } from "@/presentation-ui/components/summaries/output/SummaryPreview";

export default function Summaries(){
  return (
      <main className="h-[calc(100vh-64px)] gap-5  w-full lg:p-10 p-5 flex justify-between flex-wrap">
        <div className="w-[328px] h-full">
          <SummaryList summaries={[1, 2, 3, 4, 5,6,7,8,9,1,2,3,4,5]} />
        </div>
        <div className="w-[calc(100%-348px)] h-full">
          <SummaryPreview></SummaryPreview>
        </div>
      </main>
  );
}
