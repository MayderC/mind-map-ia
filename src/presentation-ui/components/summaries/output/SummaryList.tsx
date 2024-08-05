'use client'
import { SummaryItemList } from "./SummaryItemList";
import NextLink from "next/link";
import { ISummary } from "@/shared/interfaces/ISummary";

type SummaryListProps = {
  summaries: ISummary[];
  setSelectSummary: Function
  loading: boolean;
}

type SummaryItemListProps = {
  onDelete: (data: ISummary) => void;
}

export const SummaryList = ({summaries, setSelectSummary, onDelete, loading}: SummaryListProps & SummaryItemListProps) => {


  return (
    <div className="h-full flex rounded-lg w-full relative">
      <div className="w-full bg-primary-dark p-5 rounded-lg flex flex-col gap-4  relative">
        <div className=" overflow-y-scroll no-scrollbar flex flex-col gap-4">
          {!loading
            ? <>
                {summaries.length > 0 
                  ? <>
                      {summaries.map((summary) => (
                        <div key={summary._id}>
                          <SummaryItemList onSelect={()=> setSelectSummary(summary)}  onDelete={onDelete} data={summary} />
                        </div>
                      ))}
                    </>
                  : <div className="flex justify-center items-center h-full text-white">
                      <p>No summaries found</p>
                    </div>
                }
              </>
            : <div className="flex justify-center items-center h-full text-white">
                <p>Loading...</p>
              </div>
          }
        </div>
        <div className="flex absolute bg-primary-dark w-full left-0 justify-center rounded-lg items-center py-5 bottom-0">
          <NextLink href="/dashboard/summaries/add-summary" legacyBehavior>
            <a className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">Add Summary</a>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
