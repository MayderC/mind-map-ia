import { SummaryList } from "@/components/summaries/output/SummaryList";

export default function Summaries(){
  return (
      <main className="h-[calc(100vh-64px)] w-full lg:p-10 p-5 flex flex-wrap">
        <div className="w-1/4 h-full">
          <SummaryList summaries={[1, 2, 3, 4, 5,6,7,8,9,1,2,3,4,5]} />
        </div>
        <div className="w-3/4 h-full">
        
        </div>
      </main>
  );
}
