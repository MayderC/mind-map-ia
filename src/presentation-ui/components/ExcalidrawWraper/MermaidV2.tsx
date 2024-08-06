'use client'

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
            });
            (window as any).mermaid.contentLoaded();
            (window as any).mermaid.run({
              suppressErrors: true,
            });
        });
    }
    mermaidDraw()
  }, [])

  function mermaidEval() {
    let text = markup || ""
    if (!text.match(/^[a-zA-Z]/)) {
      text = text.split('\n').slice(1, -1).join('\n');
    }
    text = text.replace(/"`.*?`"/g, function(match: any) {
      return eval(match.slice(1, -1));
    });
    text = text.replace(/"\{.*?\}"/g, function(match: any) {
      return eval(match.slice(1, -1));
    });
    return text;
  }

  const eleM = document.querySelector('.mermaid');
  async function mermaidDraw() {
    try {
      let graphDefinition =  mermaidEval();
      const {
        svg
      } = await (window as any).mermaid.render('graphDiv', graphDefinition);
      eleM!.innerHTML = svg;
    } catch (err) {

      console.error(err);
    }
  };
  
  return <pre className="mermaid bg-slate-500 w-full h-[100%] overflow-y-scroll">{mermaidEval()}</pre>
}
