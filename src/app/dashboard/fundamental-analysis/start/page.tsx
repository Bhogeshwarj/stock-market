// import React from 'react'
// import {
//     Collapsible,
//     CollapsibleContent,
//     CollapsibleTrigger,
//   } from "@/components/ui/collapsible"
// import Stage1 from './_stages/Stage1'
// import { ArrowDown } from 'lucide-react'
// import Stage2 from './_stages/Stage2'


// function Page() {
//   return (
//     <div className="container mx-auto shadow-lg p-5 bg-gradient-to-r rounded-lg from-gray-100 to-gray-200 ">
//       <div className="p-10 rounded-lg bg-white text-center shadow-md">
//         <h2 className="font-bold text-3xl text-primary mb-4">🚀 Fundamental Analysis Stages 🚀</h2>
//         <p className="text-gray-700 mb-4">We will start looking at the stages from here  :</p>
//       </div>

//       <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
//       <Collapsible>
//   <CollapsibleTrigger><h3 className="font-semibold text-2xl mb-4">🔍 Stage 1: Understanding the Company  🔽  </h3></CollapsibleTrigger>
//   <CollapsibleContent>
//   <p className="text-gray-700 mb-4">
//           From general understanding, see if there are any moats and try to identify companies with less competition (Equity Research).
//         </p>
//         <Stage1 />
//   </CollapsibleContent>
// </Collapsible>
//  </div>
//       <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
//       <Collapsible>
//   <CollapsibleTrigger><h3 className="font-semibold text-2xl mb-4">📈 Stage 2: Application of Checklist  🔽  </h3></CollapsibleTrigger>
//   <CollapsibleContent>
//         <Stage2 />
//   </CollapsibleContent>
// </Collapsible>
//  </div>



//       {/* <div className="text-center mt-10">
//         <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all duration-300">
//           🎯 Proceed to Stage 2 🎯
//         </button>
//       </div> */}


//     </div>
//   )
// }
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

type Stock = {
  id: number;
  stockName: string;
  symbol: string;
  analysed: boolean;
  remark: string;
  peRatio: number; // P/E Ratio
  marketCap: number; // Market Cap
  grossProfitMargin: number; // Gross Profit Margin
  returnOnEquity: number; // Return on Equity
};

function Page() {
  const [watchList, setWatchList] = useState<Stock[]>([]);

  // Fetch watchlist from the backend when the component loads
  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3008/api/v1/watchlist/mywatchlist"
        );
        if (response.status === 200) {
          setWatchList(response.data);
        } else {
          console.error("Failed to fetch watchlist");
        }
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };

    fetchWatchList();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  const handleAddToFundamentals = async (stockId: number) => {
    const stockToAdd = watchList.find((stock) => stock.id === stockId);
    if (stockToAdd) {
      // Prepare the data to send, excluding the symbol
      const dataToSend = {
        stockName: stockToAdd.name,
        peRatio: stockToAdd.peRatio,
        marketCap: stockToAdd.marketCap,
        grossProfitMargin: stockToAdd.grossProfitMargin,
        returnOnEquity: stockToAdd.returnOnEquity,
      };

      try {
        const response = await axios.post(
          "http://localhost:3008/api/v1/fundamentals/add",
          dataToSend
        );

        if (response.status === 200) {
          console.log("Fundamentals added successfully");
        } else {
          console.error("Failed to add fundamentals");
        }
      } catch (error) {
        console.error("Error adding fundamentals:", error);
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    stockId: number,
    field: keyof Stock
  ) => {
    setWatchList((prevWatchList) =>
      prevWatchList.map((stock) =>
        stock.id === stockId ? { ...stock, [field]: parseFloat(e.target.value) } : stock
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="mb-10">
        <h2 className="font-extrabold text-3xl text-black-600 text-center">
          Stock Management App
        </h2>
        <h3 className="text-gray-600 text-lg text-center mt-2">
          Manage and track your favorite stocks effortlessly
        </h3>
      </div>

      {/* Watch List - Display Stocks as Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {watchList.length === 0 ? (
          <p className="text-gray-500">No stocks in the watchlist yet</p>
        ) : (
          watchList.map((stock) => (
            <div
              key={stock.id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              {/* Stock Header */}
              <div className="mb-4">
                <h4 className="font-bold text-xl text-black-600">
                  {stock.name} 
                  ({stock.symbol})
                </h4>
                <p className="text-sm text-gray-500">{stock.remark}</p>
              </div>

              {/* Input Fields for Financial Ratios */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  P/E Ratio
                </label>
                <input
                  type="number"
                  value={stock.peRatio}
                  onChange={(e) => handleInputChange(e, stock.id, "peRatio")}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  placeholder="Enter P/E Ratio"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Market Cap
                </label>
                <input
                  type="number"
                  value={stock.marketCap}
                  onChange={(e) =>
                    handleInputChange(e, stock.id, "marketCap")
                  }
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  placeholder="Enter Market Cap"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Gross Profit Margin (%)
                </label>
                <input
                  type="number"
                  value={stock.grossProfitMargin}
                  onChange={(e) =>
                    handleInputChange(e, stock.id, "grossProfitMargin")
                  }
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  placeholder="Enter Gross Profit Margin"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Return on Equity (ROE) (%)
                </label>
                <input
                  type="number"
                  value={stock.returnOnEquity}
                  onChange={(e) =>
                    handleInputChange(e, stock.id, "returnOnEquity")
                  }
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none"
                  placeholder="Enter Return on Equity"
                />
              </div>

              {/* Analyzed Status */}
              <div className="mb-4">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    stock.analysed
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                  }`}
                >
                  {stock.analysed ? "Analysed" : "Not Analysed"}
                </span>
              </div>

              {/* Add to Fundamentals Button */}
              <button
                onClick={() => handleAddToFundamentals(stock.id)}
                className="w-full p-3 bg-black text-white font-bold rounded-lg hover:bg-black-700 transition duration-300"
              >
                Add to Fundamentals
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Page;
