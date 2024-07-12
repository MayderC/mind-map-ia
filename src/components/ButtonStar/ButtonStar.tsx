import {Button } from "@excalidraw/excalidraw";
import Image from "next/image";

type ButtonProps = {
  onSelect: () => void;
  text?: string;
  isMobile ?: boolean;
  appState ?: any;
};


export const ButtonStar = ({onSelect, text}: ButtonProps) => (
    <Button className="bg-slate-100" style={
      {
        width: "max-content", 
        backgroundColor: 'white',
        height: '36px',        
      }} onSelect={onSelect}>
        <Image src='/activity.svg' alt="image-tool" width={15} height={15}/>
      <p className="text-slate-950 font-bold text-sm">{text}</p>
    </Button>
)