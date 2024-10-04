"use client";
import React, { useState } from 'react';
import TradingviewWidget from './_component/tradingviewWidget';

function Page() {
  const [stockName, setStockName] = useState('');
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (stock) => {
    if (stock && !watchList.includes(stock)) {
      setWatchList([...watchList, stock]);
      // TODO: Save this stock to the watchlist database
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      {/* Header */}
      <div className='mb-10'>
        <h2 className='font-extrabold text-3xl text-black-600 text-center'>Stock Management App</h2>
        <h3 className='text-gray-600 text-lg text-center mt-2'>
          Manage and track your favorite stocks effortlessly
        </h3>
      </div>

      {/* TradingView Widget */}
      {/* <div className='my-8'>
      <div className='shadow-md rounded-lg bg-gray-900 p-6' style={{ height: '500px' }}>
          <h4 className='font-semibold text-xl mb-4 text-black-600'>Market Overview</h4>
          <TradingviewWidget />
        </div>
      </div> */}

      {/* Search Stock and Add to Watch List */}
      <div className='my-8 shadow-md rounded-lg bg-white p-6'>
        <h4 className='font-semibold text-xl mb-4 text-black-600'>Add Stock to Watch List</h4>
        <div className='flex'>
          <input
            type='text'
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            placeholder='Search stock name...'
            className='flex-grow border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-black-500'
          />
          <button
            className='ml-4 p-3 bg-black text-white font-bold rounded-lg hover:bg-black-700 transition duration-300'
            onClick={() => handleAddToWatchList(stockName)}
          >
            Add to Watch List
          </button>
        </div>
      

      {/* Watch List */}
        <h4 className='font-semibold text-xl m-4 text-black-600'>Your Watch List</h4>
        <ul className='list-disc pl-6'>
          {watchList.length === 0 ? (
            <li className='text-gray-500'>No stocks in the watch list yet</li>
          ) : (
            watchList.map((stock, index) => (
              <li key={index} className='text-gray-700 font-medium'>
                {stock}
              </li>
            ))
          )}
        </ul>
        </div>
    </div>
  );
}

export default Page;
