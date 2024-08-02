'use client';
import GenericButton from "@/presentation-ui/components/Button/GenericButton/GenericButton";
import  Image  from 'next/image';
import './globals.css'

export default function Home() {

  return (

    <main className="min-h-4/5 h-4/5 w-full bg-primary-light flex items-center">
      <div className="w-1/2 flex justify-center">
        <Image src="/working.gif" unoptimized alt="hero" width={400} height={400} />
      </div>
      <div className="w-1/2 flex flex-col items-end justify-start"> 
        <div className="w-4/5">
          <div className="ml-2 mt-2" >
            <h1 className="text-8xl font-bold text-primary-blue">MindIA</h1>
            <p className="text-lg font-semibold text-secondary-dark">
              Create your summaries 
            </p>
            <p className="text-lg font-semibold text-secondary-dark">
              and mind maps with <span>IA</span>
            </p>
          </div>
          <div className="w-full flex items-center justify-start mt-2 px-2 gap-3">
            <GenericButton onClick={()=> console.log("Hola")} isLink={true} link="/dashboard" text="Get started" theme="dark" fullWidth={false} type="solid" />
            <GenericButton onClick={()=> console.log("Hola")} isLink={true} text="More Info" theme="light" fullWidth={false} type="light" />
          </div>
        </div>
      </div>
    </main>

  )
}
