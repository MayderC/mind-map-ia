
type ToolIAProps = {
  children: React.ReactNode
}

export const ToolIA = ({children}: ToolIAProps) => {

  return (
    <aside className="absolute top-0 right-0 z-10 w-96 h-full max-h-full">
      <div className="bg-zinc-950 p-4 h-full">
        <div className="flex justify-between">
          <div className="text-white">
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-zinc-800 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="course-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="text-white font-semibold">IA Tool</div>
        </div>
        <div className="mt-4 h-[calc(100%-48px)]">
          {children}
        </div>
      </div>
    </aside>
  )
}
