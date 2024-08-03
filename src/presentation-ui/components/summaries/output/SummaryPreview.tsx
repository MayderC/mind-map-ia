import { ISummary } from "@/shared/interfaces/ISummary";
interface SummaryPreviewProps {
  summary: ISummary | null
}

export const SummaryPreview = ({summary}: SummaryPreviewProps) => {
  return (
    <>
      <div className="bg-primary-dark text-gray-300 p-5 rounded-lg h-full w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">
              {summary?.title}
            </h1>
            <div className="flex gap-4">
              <button className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">Edit</button>
              <button className="bg-red-600 text-white font-semibold p-2 rounded-lg">Delete</button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Summary Description</h2>
              <p className="text-sm">
                {summary?.description}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Summary Content</h2>
              <p className="text-sm">
                {summary?.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
   )
}
