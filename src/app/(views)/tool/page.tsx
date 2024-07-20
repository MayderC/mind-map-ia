'use client'

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";



const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/ExcalidrawWraper/Excalidrawrapper")).default,
  {
    ssr: false,
  },
);
export default function Tool(){
  return (
    <main className="min-h-screen h-screen w-full">
      <ExcalidrawWrapper />
    </main>
  );
}
