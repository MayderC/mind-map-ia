import { SummaryItemList } from "./SummaryItemList";

interface SummaryListProps {
  summaries: number[];
}

export const SummaryList = ({summaries}: SummaryListProps) => {
  return (
    <div className="bg-primary-dark h-full flex justify-center p-5 rounded-lg w-full ">
      <div className="flex flex-col gap-4">
        {summaries.map((summary, index) => (
          <div key={index}>
            <SummaryItemList />
          </div>
        ))}
      </div>
    </div>

  )
}
