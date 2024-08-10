'use client'

import { useUser } from "@/presentation-ui/hooks/useUser"
import { addSummary } from "@/presentation-ui/services/summary.service"
import { ISummary } from "@/shared/interfaces/ISummary"
import { useState } from "react"

interface SummaryInputProps {
  setSummaryParent: Function
}

export const SummaryInput = ({setSummaryParent}: SummaryInputProps) => {
  
  const ctx = useUser()
  const [summary, setSummary] = useState<ISummary>()
  const [loading, setLoading] = useState<boolean>(false)


  const handleSummarize = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!summary) return
    if(!ctx?.user) return 
    const id = ctx?.user?.user?._id
    setLoading(true)
    const response = await addSummary(id, summary) 
    if(!response.ok) return
    setLoading(false)
    setSummaryParent(response.data)
  }

  // const handleAttachFile = (e) => {}


  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSummary((prev) => ({
      ...prev,
      title: prev?.title || '',
      description: prev?.description || '',
      content: prev?.content || '',
      [name]: value || ''
    }))
  }



  return (
    <>
      <form className="w-full h-[calc(100%-112px)]" onSubmit={handleSummarize}>
        <div className="w-full h-12 px-4 py-2 bg-white rounded-lg dark:bg-primary-dark">
            <label htmlFor="title" className="sr-only">Title</label>
            <input
              onChange={handleOnChange} 
              id="title" 
              name='title' 
              type="text" 
              className="w-full h-full outline-none px-0 text-sm text-gray-900 bg-white dark:bg-primary-dark dark:text-white dark:placeholder-gray-400" placeholder="Title" required />
        </div>
        <div className="w-full mt-2 h-12 px-4 py-2 bg-white rounded-lg dark:bg-primary-dark">
            <label htmlFor="dec" className="sr-only">Title</label>
            <input 
              onChange={handleOnChange} 
              id="dec" 
              name="description" 
              type="text" 
              className="w-full h-full outline-none px-0 text-sm text-gray-900 bg-white dark:bg-primary-dark dark:text-white dark:placeholder-gray-400" placeholder="Description" required />
        </div>
        <div className="w-full mt-2 h-full rounded-lg dark:bg-primary-dark bg-gray-50 relative no-scrollbar">
            <div className="px-4 h-full py-2 bg-white rounded-lg dark:bg-primary-dark no-scrollbar">
                <label htmlFor="comment" className="sr-only">Your text</label>
                <textarea 
                  onChange={handleOnChange}     
                  name="content" 
                  id="comment" 
                  rows={4}
                   
                  className="w-full resize-none h-[calc(100%-112px)] no-scrollbar outline-none px-0 text-sm text-gray-900 bg-white dark:bg-primary-dark focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Paste or write your text" required ></textarea>
            </div>
            <div className="flex items-center gap-2 p-3 relative bottom-14">
                <button type="submit" className="inline-flex items-center py-2 px-4 text-sm text-center text-primary-dark font-bold bg-white rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-primary-light">
                    {loading ? 'Loading...' : 'Summarize'}
                </button>
                {/* <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                    <label htmlFor="button-file" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                          </svg>
                        <span className="sr-only">Attach file</span>
                    </label>
                    <input className="hidden" type="file" name="button-file" id="button-file" />
                </div> */}
            </div>
        </div>
      </form>
    </>
  )
}
