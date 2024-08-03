import Image from "next/image"
import {ISummary} from '@/shared/interfaces/ISummary'

type SummaryItemListProps = {
  onDelete: (data: ISummary) => void;
  onSelect: () => void;
  data: ISummary;
}

export const SummaryItemList = ({onDelete, onSelect, data}:SummaryItemListProps) => {
  return (
    <div onClick={()=> onSelect()} className="h-[65px] w-[288px] text-gray-300 bg-zinc-950 rounded-lg p-3  flex justify-between">
      <div>
        <Image src="/summaryItem.svg" width={40} height={40} alt="summary-icon" />
      </div>
      <div>
        <div className="font-semibold max-w-[200px] truncate">
          {data.title}
        </div>
        <div className="flex leading-3 text-sm justify-between gap-7 text-[#71717a]">
          <div className="">22/10/2024</div>
          <div>
             {data.content.split(' ').length} 
             words
          </div>
        </div>
      </div>
      <div  className="ml-2 flex hover:scale-110 transition-all hover:cursor-pointer">
        <Image onClick={()=> onDelete(data)} src="/remove.svg" width={20} height={20} alt="more-icon" />
      </div>
    </div>
  )
}
