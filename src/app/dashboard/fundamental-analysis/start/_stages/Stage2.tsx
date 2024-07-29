import React from 'react'

function Stage2() {
  return (
      
    <div className='text-left'>
      <div className=" p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Net Profit Growth</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> In line with the gross profit growth</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> Revenue growth should be in line with the profit growth</p>
        <div className="text-right">
          <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">EPS</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> EPS should be consistent with the Net Profits</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> If a company is diluting its equity, then it is not good for its shareholders</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Gross Profit Margin (GPM)</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> &gt; 20%</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> Higher the margin, higher is the evidence of a sustainable moat</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Debt Level</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> The company should not be highly leveraged</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> High debt means the company is operating on high leverage. Plus the finance cost eats away the earnings</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Inventory</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> Applicable for manufacturing companies</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> A growing inventory, along with a growing PAT margin is a good sign. Always check the inventory number of days</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Sales vs Receivables</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> Sales backed by receivables is not a great sign</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> This signifies that the company is just pushing its products to show revenue growth</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Cash flow from operations</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> Has to be positive</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> If the company is not generating cash from operations, then it indicates operating stress</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 p-5 rounded-lg bg-white shadow-md">
        <h4 className="font-semibold text-xl mb-2">Return on Equity</h4>
        <p className="text-gray-700 mb-2"><strong>Comment:</strong> &gt;25%</p>
        <p className="text-gray-700 mb-2"><strong>What does it signify:</strong> Higher the ROE, better it is for the investor, however, make sure you check the debt levels along with this</p>
        <div className="text-right">
        <label className=" flex flex-row-reverse items-center ">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
            <span className="mr-2 text-gray-700">Completed</span>
          </label>
        </div>
      </div>

      <div className="mt-10 text-left mx-auto inline-block">
        <h4 className="font-semibold text-xl mb-2">Checklist Summary</h4>
        <p className="text-gray-700">
          We always look for the last 5 financial years. This process helps us develop a holistic view of the company, ensuring the numbers support our understanding and confidence in the business.
        </p>
      </div>


</div>
  )
}

export default Stage2
