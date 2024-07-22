import React from 'react';
import Firstratio from './_ratios/FirstRatio';
import SecondRatio from './_ratios/SecondRatio';
import ThirdRatio from './_ratios/ThirdRatio';

function Financial() {
  return (
    <div className="container mx-auto p-5">
      <div className="p-10 rounded-lg shadow-lg bg-white">
        <h2 className="font-bold text-3xl text-blue-600">Fundamental Analysis</h2>
        <h3 className="text-gray-600 mt-2">Calculate Your Financial Ratios</h3>
        
        <div className="mt-5">
          <h4 className="font-semibold text-xl">Annual Report for the Fundamental Analyst</h4>
          <p className="text-gray-700 mt-2">
            The important sections in the Annual Report are the Financial Statements, which consist of:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>The Profit and Loss Statement</li>
            <li>The Balance Sheet</li>
            <li>The Cash Flow Statement</li>
          </ul>
        </div>
      </div>  

      <div className="mt-10">
        <h2 className="text-2xl text-gray-800">Financial Ratios</h2>
        <p className="text-gray-600">Financial Ratios are categorized into four types:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Profitability Ratios</li>
          <li>Leverage Ratios</li>
          <li>Valuation Ratios</li>
          <li>Operating Ratios</li>
        </ul>
      </div>

      <section className="mt-10">
        <h1 className="text-xl font-bold">Profitability Ratios</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
          <div className="p-5 border rounded-lg shadow-md bg-gray-100">EBITDA Margin (Operating Profit Margin)</div>
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
      </section>
    </div>
  );
}

export default Financial;