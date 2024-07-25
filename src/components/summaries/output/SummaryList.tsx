import { SummaryItemList } from "./SummaryItemList";

interface SummaryListProps {
  summaries: number[];
}

export const SummaryList = ({summaries}: SummaryListProps) => {
  return (
    <div className="h-full flex p-5 rounded-lg w-full relative">
      <div className="bg-primary-dark p-5 rounded-lg flex flex-col gap-4  relative">
        <div className="overflow-y-scroll flex flex-col gap-4">
          {summaries.map((summary, index) => (
            <div key={index}>
              <SummaryItemList />
            </div>
          ))}
          </div>
          <div className="flex absolute bg-primary-dark w-full left-0 justify-center rounded-lg items-center py-5 bottom-0">
            <button className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">Add Summary</button>
        </div>
      </div>
    </div>

  )
}
