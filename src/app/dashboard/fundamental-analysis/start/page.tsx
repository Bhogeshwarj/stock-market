import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import Stage1 from './_stages/Stage1'
import { ArrowDown } from 'lucide-react'
import Stage2 from './_stages/Stage2'


function Page() {
  return (
    <div className="container mx-auto shadow-lg p-5 bg-gradient-to-r rounded-lg from-gray-100 to-gray-200 ">
      <div className="p-10 rounded-lg bg-white text-center shadow-md">
        <h2 className="font-bold text-3xl text-primary mb-4">🚀 Fundamental Analysis Stages 🚀</h2>
        <p className="text-gray-700 mb-4">We will start looking at the stages from here  :</p>
      </div>

      <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
      <Collapsible>
  <CollapsibleTrigger><h3 className="font-semibold text-2xl mb-4">🔍 Stage 1: Understanding the Company  🔽  </h3></CollapsibleTrigger>
  <CollapsibleContent>
  <p className="text-gray-700 mb-4">
          From general understanding, see if there are any moats and try to identify companies with less competition (Equity Research).
        </p>
        <Stage1 />
  </CollapsibleContent>
</Collapsible>
 </div>
      <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
      <Collapsible>
  <CollapsibleTrigger><h3 className="font-semibold text-2xl mb-4">📈 Stage 2: Application of Checklist  🔽  </h3></CollapsibleTrigger>
  <CollapsibleContent>
        <Stage2 />
  </CollapsibleContent>
</Collapsible>
 </div>



      <div className="text-center mt-10">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300">
          🎯 Proceed to Stage 2 🎯
        </button>
      </div>
    </div>
  )
}

export default Page
