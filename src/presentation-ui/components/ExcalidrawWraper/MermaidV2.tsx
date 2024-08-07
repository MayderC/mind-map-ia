'use client'

import { mermaidEval } from '@/presentation-ui/helpers/handle-files/mermaid';
import React, { useEffect } from 'react'

function new_script(src: string) {
  return new Promise(function(resolve: any, reject){
    if (typeof window !== "undefined") {
      var script = window.document.createElement('script');
      script.src = src;
      script.addEventListener('load', function () {
        resolve();
      });
      script.addEventListener('error', function (e) {
        reject(e);
      });
      window.document.body.appendChild(script);
    }
  })
};


export const MermaidV2 = ({markup}: any) => {
  
  useEffect(() => {
    mermaidDraw()
  }, [markup])

  useEffect(() => {
    if (!(window as any).mermaid) {
        var my_script = new_script('https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.0/mermaid.min.js');
        my_script.then(() => {
            (window as any).mermaid.mermaidAPI.initialize({
                securityLevel: 'loose',
                theme: 'dark',
            });
            (window as any).mermaid.contentLoaded();
            (window as any).mermaid.run({
              suppressErrors: true,
            });
        });
    }
    mermaidDraw()

    return () => {
      if (eleM) {
        eleM.innerHTML = ''
      }
      (window as any).mermaid?.contentLoaded();
    }
  }, [])


  const eleM = document.querySelector('.mermaid');
  async function mermaidDraw() {
    try {
      let graphDefinition =  mermaidEval(markup);
      const { 
        svg
      } = await (window as any).mermaid.render('graphDiv', graphDefinition);
      eleM!.innerHTML = svg;
    } catch (err) {
      (window as any).mermaid?.contentLoaded();
      console.error(err);
    }
  };
  
  return <pre className="mermaid bg-primary-dark w-full h-[100%] flex  overflow-y-scroll">{mermaidEval(markup)}</pre>
}
