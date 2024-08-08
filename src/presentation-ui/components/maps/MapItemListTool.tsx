import Image from "next/image"
import { IMap } from "@/shared/interfaces/IMap";
import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";

type MapItemListToolProps = {
  data: IMap;
  onDelete: Function
} 

export const MapItemListTool = ({data, onDelete}: MapItemListToolProps) => {

  const merCtx = useMermaidMap()
  const border = merCtx?.map?._id === data._id ? 'border border-blue-600' : ''

  return (
    <div 
      className={"h-[65px] w-[310px] text-gray-300 bg-zinc-950 rounded-lg p-3  flex justify-between "+border}>
      <div className="flex justify-center">
        <div className="flex items-center mr-4">
          <Image src="/summaryItem.svg" width={20} height={20} alt="summary-icon" />
        </div>
        <div>
          <div className="font-semibold max-w-[200px] truncate">
            {data?.title}
          </div>
          <div className="flex leading-3 text-sm justify-between gap-7 text-[#71717a]">
            <div className="">22/10/2024</div>
            <div>
              {data?.type} 
            </div>
          </div>
        </div>
      </div>
      <div  className="ml-2 flex hover:scale-110 transition-all hover:cursor-pointer">
        <Image onClick={()=> onDelete(data)} src="/remove.svg" width={20} height={20} alt="more-icon" />
      </div>
    </div>
  )
}
