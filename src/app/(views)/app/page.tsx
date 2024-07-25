'use client'
import dynamic from "next/dynamic";

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/components/ExcalidrawWraper/Excalidrawrapper")).default,
  {
    ssr: false,
  },
);
export default function Tool(){
  return (
      <main className="min-[calc(100vh-64px)] h-[calc(100vh-64px)] w-full">
        <ExcalidrawWrapper />
      </main>
  );
}
