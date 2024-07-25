import { SummaryList } from "@/components/summaries/output/SummaryList";

export default function Summaries(){
  return (
      <main className="min-[calc(100vh-64px)] h-[calc(100vh-64px)] w-full lg:p-10 p-5 flex flex-wrap">
        <div className="w-4/12 h-full">
          <SummaryList summaries={[1, 2, 3, 4, 5]} />
        </div>
        <div className="w-9/12 h-full">
        
        </div>
      </main>
  );
}
