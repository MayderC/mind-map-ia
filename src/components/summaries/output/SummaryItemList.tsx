import Image from "next/image"

export const SummaryItemList = () => {
  return (
    <div className="h-[65px] w-[288px] text-gray-300 bg-zinc-950 rounded-lg p-3  flex justify-between">
      <div>
        <Image src="/summaryItem.svg" width={40} height={40} alt="summary-icon" />
      </div>
      <div>
        <div className="font-semibold">Nomre</div>
        <div className="flex leading-3 text-sm justify-between gap-7 text-[#71717a]">
          <div className="">22/10/2024</div>
          <div> 900 words</div>
        </div>
      </div>
      <div className="ml-2 flex hover:scale-110 transition-all hover:cursor-pointer">
        <Image src="/remove.svg" width={25} height={25} alt="more-icon" />
      </div>
    </div>
  )
}
