'use client'
import { SummaryItemListTool } from "./SummaryItemListTool";
import NextLink from "next/link";
import { ISummary } from "@/shared/interfaces/ISummary";

type SummaryListProps = {
  summaries: ISummary[];
  loading: boolean;
}



export const SummaryListTool = ({summaries, loading}: SummaryListProps ) => {


  return (
    <div className="h-full flex rounded-lg w-full relative">
      <div className="w-full bg-primary-dark p-5 rounded-lg flex flex-col gap-4  relative">
        <p className="text-white font-semibold">Select a summary </p>
        <div className=" overflow-y-scroll no-scrollbar flex flex-col gap-4">
          {!loading
            ? <>
                {summaries.length > 0 
                  ? <>
                      {summaries.map((summary) => (
                        <NextLink key={summary._id}
                        href={"/dashboard/?summaryId=" + summary._id || ""}
                        className="text-default-900 active:bg-none max-w-full -mb-[6px]"
                        >
                          <div>
                            <SummaryItemListTool  data={summary} />
                          </div>
                        </NextLink>
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
      </div>
    </div>
  );
}
