import {MouseEventHandler} from 'react'

interface SummaryPreviewFooterProps {
  handleDownload: MouseEventHandler<HTMLButtonElement>
}

export const SummaryPreviewFooter = ({ handleDownload}: SummaryPreviewFooterProps) => {
  return (
    <div className="w-full h-full flex items-end gap-4">
      <button onClick={handleDownload} className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">Download PDF</button>
    </div>
  )
}
