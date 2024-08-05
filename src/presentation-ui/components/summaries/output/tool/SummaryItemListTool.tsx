import Image from "next/image"
import {ISummary} from '@/shared/interfaces/ISummary'

type SummaryItemListProps = {
  data: ISummary;
}

export const SummaryItemListTool = ({data}:SummaryItemListProps) => {
  return (
    <div className="h-[65px] w-[310px] text-gray-300 bg-zinc-950 rounded-lg p-3  flex justify-start">
      <div className="flex items-center mr-4">
        <Image src="/summaryItem.svg" width={20} height={20} alt="summary-icon" />
      </div>
      <div>
        <div className="font-semibold max-w-[200px] truncate">
          {data.title}
        </div>
        <div className="flex leading-3 text-sm justify-between gap-7 text-[#71717a]">
          <div className="">22/10/2024</div>
          <div>
             {data.content.split(' ').length+' '} 
             words
          </div>
        </div>
      </div>
    </div>
  )
}
