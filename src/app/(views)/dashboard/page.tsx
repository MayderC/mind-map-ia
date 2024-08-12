'use client'
import {MermaidV2} from "@/presentation-ui/components/ExcalidrawWraper/MermaidV2";
import { MapListTool } from "@/presentation-ui/components/maps/MapListTool";
import { SummaryListTool } from "@/presentation-ui/components/summaries/output/tool/SummaryListTool";
import { ToolIA } from "@/presentation-ui/components/toolIA/ToolIA";
import dynamic from "next/dynamic";
import { Suspense} from "react";
import { GenericModal } from "@/presentation-ui/components/modals/GenericModal";
import { useSummary } from "@/presentation-ui/hooks/useSummary";
// import Mermaid from "react-mermaid2"


const ExcalidrawWrapper = dynamic(
  async () => (await import("@/presentation-ui/components/ExcalidrawWraper/Excalidrawrapper")).default,
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

function Tool(){

  const { 
    currentSummary, 
    stepState, 
    summaries, 
    loadingSummaries,
    merCtx,
    summaryId,
    chart, 
    selectMap, 
    generateMap, 
    tool, 
    showModal,
    onDelete, 
    handleDelete, 
    setShowModal } = useSummary()

  return (
      <main className="min-[calc(100vh-64px)] h-[calc(100vh-70px)] w-full relative">
        {(summaryId && merCtx?.map?._id) ? <MermaidV2 markup={chart}/> : <ExcalidrawWrapper />}
        <>
          { tool?.show && 
            <ToolIA>
            {(stepState == 'maps') && currentSummary  
              ? <MapListTool 
                  generateMap={generateMap} 
                  loading={loadingSummaries} 
                  setSelctMap={selectMap} 
                  maps={currentSummary?.maps || []}
                  onDelete={onDelete}
                />
              : <SummaryListTool  
                  summaries={summaries} 
                  loading={loadingSummaries}
                />
            }
            </ToolIA>
          }
        </>
        <GenericModal callback={handleDelete} data={{name: merCtx?.map?.title || '', type: " map "}} show={showModal} handleShow={setShowModal} />
      </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Tool />
    </Suspense>
  );
}