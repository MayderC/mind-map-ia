"use client"
import { ISummary } from "@/shared/interfaces/ISummary";
import Markdown from 'markdown-to-jsx'
import {useRef} from "react";
import { SummaryPreviewFooter } from "./SummaryPreviewFooter";
import { FilesFacade } from "@/presentation-ui/helpers/handle-files/facade.files";


interface SummaryPreviewProps {
  summary?: ISummary | null
  onDelete: (data: ISummary) => void
}

export const SummaryPreview = ({summary, onDelete}: SummaryPreviewProps) => {

  const refContect = useRef<HTMLDivElement>(null)

  const handlePrint = () => {

    const tempHtml = refContect?.current as HTMLElement;
    const clone = tempHtml.cloneNode(true) as HTMLElement;
    const btns = clone.querySelector('#btns-summary');
    if (btns) btns.remove();

    const filesFacade = new FilesFacade()
    //the html was sanitized previously, before to set the html to the div
    //so we can trust the html content
    filesFacade.exportFrom(clone.innerHTML).to.pdf()
  };

  return (
    <>
      <div className="bg-primary-dark text-gray-300 p-5 rounded-lg h-full w-full">
        <div ref={refContect} className="flex flex-col gap-4 overflow-y-scroll h-[calc(100%-64px)] no-scrollbar">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">
              {summary?.title}
            </h1>
              { summary && 
                <div id="btns-summary" className="flex gap-4">
                  <button 
                    onClick={()=> onDelete(summary)}
                    className="bg-red-600 text-white font-semibold p-2 rounded-lg">Delete</button>
                </div>
              }
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-semibold">Summary Description</h2>
              <div className="mt-1">
                <p className="text-sm">
                  {summary?.description}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Summary Content</h2>
              <div className="mt-4">
                <Markdown 
                  options={{ wrapper: 'article',
                     
                    overrides: {
                      h1: { component: 'h1', props: { className: 'text-2xl font-semibold text-blue-400 block mt-3 subtitles' } },
                      h2: { component: 'h2', props: { className: 'text-lg font-semibold text-blue-400 block mt-3 subtitles' } },
                      h3: { component: 'h3', props: { className: 'text-base font-semibold text-blue-400 block mt-3 subtitles' } },
                      h4: { component: 'h4', props: { className: 'text-sm font-semibold text-blue-400 block mt-3 subtitles' } },
                      strong: { component: 'p', props: { className: 'font-semibold text-blue-400 block mt-3 subtitles' } },
                      //remove text decoration from links
                    }}} >
                  {summary ? summary.content: 'Select a summary from the list to preview'}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16">
          { summary && 
            <SummaryPreviewFooter handleDownload={handlePrint} summaryId={summary?._id || ''} />
          }
        </div>
      </div>
    </>
   )
}
