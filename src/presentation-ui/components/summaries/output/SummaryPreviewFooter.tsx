import {MouseEventHandler} from 'react'
import NextLink from "next/link";

interface SummaryPreviewFooterProps {
  handleDownload: MouseEventHandler<HTMLButtonElement>
  summaryId: string | null
}

export const SummaryPreviewFooter = ({ handleDownload, summaryId}: SummaryPreviewFooterProps) => {
  return (
    <div className="w-full h-full flex items-end gap-4">
      <button onClick={handleDownload} className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">Download PDF</button>
        <NextLink
        href={"/dashboard/?summaryId=" + summaryId || ""}
        className="text-default-900 active:bg-none max-w-full -mb-[6px]"
        >
          <div className="btn-gradient relative z-10 inline-flex rounded-lg p-[2px] hover:cursor-pointer">
            <div className="relative z-10 rounded-lg bg-slate-900 px-3 text-center">
              <p className="py-[6px]"><span className="font-semibold text-pink-500 hover:text-purple-500 ">IA</span> generate map</p>
            </div>
        </div>
        </NextLink>
    </div>
  )
}
