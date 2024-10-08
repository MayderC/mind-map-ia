import { Input,Navbar, NavbarContent } from "@nextui-org/react";
import React from "react";



import { BurguerButton } from "./burguer-button";
import { useRouter, usePathname } from "next/navigation";
import { useTool } from "@/presentation-ui/hooks/useTool";
import { useMermaidMap } from "@/presentation-ui/hooks/useMeramaidMap";
import { createExcalidrawMap } from "@/presentation-ui/services/maps.service";


interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {

  //use route 
  const roter = useRouter()
  const pathname = usePathname()
  const tool = useTool()
  const merd = useMermaidMap()
  const [input, setInput] = React.useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)


  const handleIARequest = async () => {
    setLoading(true)
    const response = await createExcalidrawMap(input)
    if(response.data) merd?.handleMermaid4Excalidraw(response.data)
    setLoading(false)
  }

  const onClickTool = () => {
    //get route is is not in the route dashboard redirect to dashboard
    const isDashboard = pathname === '/dashboard'
    if (!isDashboard) {
      tool?.set(true)
      roter.push('/dashboard')
    }
    if(isDashboard) tool?.toggle() 
  }

  return (
    <div className="relative flex flex-col flex-1 bg-black overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full flex justify-between",
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="w-full">
        <form
        className="w-full flex"
          onSubmit={(e) => {
            e.preventDefault()
            handleIARequest();
          }}  
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pidele a la IA que te genere un diagrama en Excalidraw"
            className="w-full text-white">
          </Input>

          <button type="submit" 
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg ml-2"
          >{
            loading ? "Loading": "generate"
          }</button>

        </form>

          <div onClick={onClickTool} className="btn-gradient relative z-10 inline-flex rounded-lg p-[2px] hover:cursor-pointer ">
            <div className="relative z-10 rounded-lg bg-slate-900 px-3 text-center flex nowrap">
              <p className="py-[6px] block flex nowrap"><span className="font-semibold text-pink-500 hover:text-purple-500 block">IA</span> Tool</p>
            </div>
          </div>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
