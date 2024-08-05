'use client'
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const ExcalidrawWrapper = dynamic(
  async () => (await import("@/presentation-ui/components/ExcalidrawWraper/Excalidrawrapper")).default,
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
export default function Tool(){

  const searchParams = useSearchParams()

  const summaryId = searchParams.get('summaryId')

  console.log(summaryId) 

  return (
      <main className="min-[calc(100vh-64px)] h-[calc(100vh-64px)] w-full">
        <ExcalidrawWrapper />
      </main>
  );
}
