'use client';
import { ButtonStarProps } from "@/components/common/types";
import {Button } from "@excalidraw/excalidraw";
import Image from "next/image";



export const ButtonStar = ({onSelect, text}: ButtonStarProps) => (
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