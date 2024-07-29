'use client'
import { GenericModal } from "@/presentation-ui/components/models/GenericModal";
import { SummaryItemList } from "./SummaryItemList";
import { useState } from "react";
import NextLink from "next/link";

interface SummaryListProps {
  summaries: number[];
}

export const SummaryList = ({summaries}: SummaryListProps) => {

  const [showModal, setShowModal] = useState(false)


  const handleDelete = (id: any) => {
    console.log("Delete summar id: ", id)
    console.log("Show modal", showModal)
    setShowModal(true)
  }

  return (
    <div className="h-full flex rounded-lg w-full relative">
      <div className="bg-primary-dark p-5 rounded-lg flex flex-col gap-4  relative">
        <div className="overflow-y-scroll no-scrollbar flex flex-col gap-4">
          {summaries.map((summary, index) => (
            <div key={index}>
              <SummaryItemList onClick={handleDelete} data={summary} />
            </div>
          ))}
        </div>
        <div className="flex absolute bg-primary-dark w-full left-0 justify-center rounded-lg items-center py-5 bottom-0">
          <NextLink href="/app/summaries/add-summary" legacyBehavior>
            <a className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">Add Summary</a>
          </NextLink>
        </div>
      </div>
      <GenericModal show={showModal} handleShow={setShowModal} />
    </div>
  );
}
