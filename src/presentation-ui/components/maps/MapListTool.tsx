'use client'
import { useEffect, useState } from "react";
import { MapItemListTool } from "./MapItemListTool";
import { IMap } from "@/shared/interfaces/IMap";

type MapListToolProps = {
  maps : IMap[];
  setSelctMap: Function;
  loading: boolean;
  generateMap: Function
}

type MapInfoFormProps = {
  generateMap: Function
}

const MapInfoForm = ({generateMap}: MapInfoFormProps) => {
  const [form, setForm] = useState<{title: string,type: string}>({title: '', type: 'mindmap'})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>()


  const handleOnChange = (e: any) => {
    const {name, value} = e.target
    if (!form) return
    setForm({...form, [name]: value})
  }

  const saveMap = async() => {
    if(!form.title || !form.type){
      setError(true)
      setTimeout(()=> setError(false), 900)
      return
    } 
    setLoading(true)
    await generateMap(form)
    setLoading(false)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="title" className="text-white">Title</label>
        <input

          onChange={handleOnChange}
          type="text" 
          name="title" 
          id="title" 
          className='bg-primary-light text-zinc-950 font-semibold p-1 rounded-lg'
          placeholder="Title" required />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="description" className="text-white">Type</label>
        <select 
        onChange={handleOnChange}
        name="type" 
        id="type" 
        className="bg-primary-light text-zinc-950 font-semibold p-1 rounded-lg"
        required>
          <option value="mindmap">Mindmap</option>
          <option value="flowchart">Flowchart</option>
          <option value="sequence">Sequence</option>
          <option value="gantt">Gantt</option>
          <option value="class">Class</option>
          <option value="state">State</option>
          <option value="entity">Entity</option>
        </select>
      </div>
        {error && <span className="text-red-500"> Fill all fields</span>}
      <div onClick={saveMap} className="btn-gradient whitespace-nowrap mt-2 w-[149px] relative z-10 inline-flex rounded-lg p-[2px] hover:cursor-pointer">
            <div className="relative z-10 rounded-lg bg-slate-900 px-3 text-center">
              <p className="py-[6px]"><span className="font-semibold text-pink-500 hover:text-purple-500 ">IA</span> 
                {loading ? ' loading...' : ' generate map'}
              </p>
            </div>
        </div>
    </div>
  )
}



export const MapListTool = ({maps, setSelctMap, loading, generateMap}: MapListToolProps ) => {

  const [showForm, setShowForm] = useState<boolean>(false)
  const [textBtn, setTextBtn] = useState<string>('Create Map') 

  useEffect(() => {
    if(showForm)setTextBtn('Close Form')
    else setTextBtn('Create Map')
  }, [showForm])


  return (
    <div className="flex rounded-lg w-full relative h-full">
      <div className="w-full bg-primary-dark p-5 rounded-lg flex flex-col gap-4  relative">
        <p className="text-white font-semibold">
          Select a map
        </p>
        <div className=" overflow-y-scroll no-scrollbar flex flex-col gap-4">
          { showForm && <MapInfoForm generateMap={generateMap}/>}
          <div className="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
          {!loading
            ? <>
                {maps.length > 0 
                  ? <>
                      {maps.map((map) => (
                        <div key={map._id} onClick={()=> setSelctMap(map)}>
                          <MapItemListTool  data={map} />
                        </div>
                      ))}
                    </>
                  : <div className="flex justify-center items-center h-full text-white">
                      <p>No maps found</p>
                    </div>
                }
              </>
            : <div className="flex justify-center items-center h-full text-white">
                <p>Loading...</p>
              </div>
          }
          </div>
        </div>
        <div className="flex relative bg-primary-dark w-full left-0 justify-center rounded-lg items-center  bottom-0">
          <button onClick={()=> setShowForm(!showForm)}  className="bg-primary-light text-zinc-950 font-semibold p-2 rounded-lg">{textBtn}</button>
        </div>
      </div>
    </div>
  );
}