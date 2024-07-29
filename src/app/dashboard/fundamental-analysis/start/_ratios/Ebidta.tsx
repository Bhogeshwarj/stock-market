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
        <div>
          <div>
            These are financial Ratios  : 
                    {/* <section className="mt-10">
        <h1 className="text-xl font-bold">Profitability Ratios</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
        <Ebidta />

          <div className="p-5 border rounded-lg shadow-md bg-gray-100">PAT Margin</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Return on Equity(ROE)</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Return on Capital Employed(ROCE)</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Return on Asset(ROA)</div>
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-xl font-bold">Leverage Ratios</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Debt to Equity Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Debt to Asset Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Financial Leverage Ratio</div>
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-xl font-bold">Operating Ratios</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Fixed Assets Turnover Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Working Capital Turnover Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Total Assets Turnover Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Inventory Turnover Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Inventory Number of Days</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Receivable Turnover Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Days Sales Outstanding (DSO)</div>
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-xl font-bold">Valuation Ratios</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Price to Sales (P/S) Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Price to Book Value (P/BV) Ratio</div>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">Price to Earnings (P/E) Ratio</div>
        </div>
      </section> */}
          </div>

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
  
  