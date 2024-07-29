import React from 'react';
import { Button } from '@/components/ui/button';

function Financial() {
  return (
    <div className="container mx-auto shadow-lg p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
      <div className="p-10 rounded-lg bg-white text-center shadow-md">
        <h2 className="font-bold text-4xl text--600 mb-4">🎉 Fundamental Analysis 🎉</h2>
        <div className="mt-5">
          <h4 className="font-semibold text-xl mb-2">Annual Report for the Fundamental Analyst</h4>
          <p className="text-gray-700">
            The important sections in the Annual Report are the Financial Statements, which consist of:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 text-left mx-auto inline-block">
            <li>The Profit and Loss Statement</li>
            <li>The Balance Sheet</li>
            <li>The Cash Flow Statement</li>
          </ul>
        </div>
      </div>

      <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
        <h2 className="text-2xl text-gray-800 mb-4">📊 Financial Ratios 📊</h2>
        <p className="text-gray-600 mb-4">Financial Ratios are categorized into four types:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2 text-left mx-auto inline-block">
          <li>Profitability Ratios</li>
          <li>Leverage Ratios</li>
          <li>Valuation Ratios</li>
          <li>Operating Ratios</li>
        </ul>
      </div>

      <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
        <h2 className="text-2xl text-gray-800 mb-4">🔍 Procedure for Fundamental Analysis 🔍</h2>
        <h3 className="text-xl text-gray-800 mt-2 mb-2">Generating a Stock Idea:</h3>
        <ol className="list-decimal list-inside text-gray-700 mt-2 text-left mx-auto inline-block">
          <li>General Observation</li>
          <li>Stock Screener</li>
          <li>Macro Trends</li>
          <li>Sectoral Trends</li>
          <li>Special Situations</li>
          <li>Circle of Competence</li>
        </ol>
        <h3 className="text-xl text-gray-800 mt-5 mb-2">Investment Due Diligence Checklist:</h3>
        <ol className="list-decimal list-inside text-gray-700 mt-2 text-left mx-auto inline-block">
          <li>MOAT: A company's competitive advantage.</li>
          <li>Understanding the Business: Requires reading the annual reports.</li>
          <li>Application of the Checklist.</li>
          <li>Valuation: Estimating intrinsic value using DCF and CCA.</li>
        </ol>
        <h3 className="text-xl text-gray-800 mt-5 mb-2">Checklist for investing in the business:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-2 text-left mx-auto inline-block">
          <li>Gross Profit Margin (>20%)</li>
          <li>Revenue Growth in line with gross profit growth</li>
          <li>EPS should be consistent with Net Profits</li>
          <li>Debt Level: Company should not be highly leveraged</li>
          <li>Inventory: Growing inventory with growing PAT (for manufacturing companies)</li>
          <li>Sales vs Receivables: Sales backed by receivables is not a great sign</li>
          <li>Cash Flow from Operations: Should be positive</li>
          <li>Return on Equity (>25%)</li>
      
        </ul>
      </div>

      <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
        <h2 className="text-2xl text-gray-800 mb-4">💡 Investment Techniques 💡</h2>
        <h3 className="text-xl text-gray-800 mt-2 mb-2">We will use these techniques to invest:</h3>
        <ol className="list-decimal list-inside text-gray-700 mt-2 text-left mx-auto inline-block">
          <li>DCF Analysis</li>
          <li>Conduct Comparable Company Analysis:</li>
          <ul className="list-disc list-inside text-gray-700 mt-2 ml-5">
            <li>Identify a peer group of similar companies</li>
            <li>Calculate key financial ratios (P/E, EV/EBITDA) for these companies</li>
            <li>Compare these ratios with the company being valued .</li>
          </ul>
        </ol>
      </div>

      <div className="text-center mt-10">
        <Button className="bg-primary text-white px-10 py-2   rounded-full  transition-all duration-300">
          🚀 Start 🚀
        </Button>
      </div>
    </div>
  );
}

export default Financial;
