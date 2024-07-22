import React from 'react'

function financial() {
  return (
<div className="bg-gray-100 p-10 rounded-lg shadow-lg">
  <h2 className="font-bold text-2xl text-blue-600">Fundamental Analysis</h2>
  <h2 className="text-gray-500">Calculate Your Financial Ratios</h2>
  
  <div className="mt-5">
    <h3 className="font-semibold text-xl">Annual Report for the Fundamental Analyst</h3>
    <p className="text-gray-700 mt-2">
      The important sections in the Annual Report are the Financial Statements, which consist of:
    </p>
    <ul className="list-disc list-inside text-gray-700 mt-2">
      <li>The Profit and Loss Statement</li>
      <li>The Balance Sheet</li>
      <li>The Cash Flow Statement</li>
    </ul>
  </div>

  <div className="mt-8">
    <h3 className="font-semibold text-lg">Calculate Financial Ratios</h3>
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
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Calculate Ratios
      </button>
    </form>
  </div>
</div>
  )
}

export default financial
