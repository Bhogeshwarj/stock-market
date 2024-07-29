"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import React from "react";

  
function Page() {
    const [ratio,setRatio]= React.useState('');
    function calculate(){
        setRatio('23')
    }

    return (
      <div>
        <div >
 <Dialog >
  <DialogTrigger className="p-5 w-full border rounded-lg shadow-md bg-gray-100"> EBITDA Margin (Operating Profit Margin) {ratio}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
      <form className="mt-4">
      <div className="mb-4">
        <label className="block text-gray-700">Net Income:</label>
        <input type="number" className="border border-gray-300 p-2 rounded w-full" placeholder="Enter Net Income" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Total Assets:</label>
        <input type="number" className="border border-gray-300 p-2 rounded w-full" placeholder="Enter Total Assets" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Total Liabilities:</label>
        <input type="number" className="border border-gray-300 p-2 rounded w-full" placeholder="Enter Total Liabilities" />
      </div>
      <button type="submit" onClick={calculate}className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Calculate Ratios
        
      </button>
    </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

           
        </div>
      </div>
    )
  }
  
  export default Page
  
  