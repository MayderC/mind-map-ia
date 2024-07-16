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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  if (!isClient) {
    return null;
  }

  return (
    <main className="min-h-screen h-screen w-full">
      <ExcalidrawWrapper />
    </main>
  );
}
