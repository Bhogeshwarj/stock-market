"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Stock = {
  id: number; // Add ID to the type
  stockName: string;
  symbol: string;
  analysed: boolean;
  remark: string;
};

function Page() {
  const [stockName, setStockName] = useState<string>('');
  const [symbol, setSymbol] = useState<string>('');
  const [analysed, setAnalysed] = useState<boolean>(false);
  const [remark, setRemark] = useState<string>('');
  const [watchList, setWatchList] = useState<Stock[]>([]);

  // Fetch watchlist from the backend when the component loads
  useEffect(() => {
    const fetchWatchList = async () => {
      try {
        const response = await axios.get('http://localhost:3008/api/v1/watchlist/mywatchlist');
        if (response.status === 200) {
          setWatchList(response.data);
        } else {
          console.error('Failed to fetch watchlist');
        }
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };

    fetchWatchList();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const stockData: Omit<Stock, 'id'> = {
      stockName,
      symbol,
      analysed,
      remark,
    };

    try {
      // Send POST request to backend to add stock
      const response = await axios.post('http://localhost:3008/api/v1/watchlist/add', stockData);

      if (response.status === 200) {
        console.log('Stock added:', response.data);
        setWatchList([...watchList, response.data]); // Assuming the backend returns the added stock with an ID

        // Clear the form inputs
        setStockName('');
        setSymbol('');
        setAnalysed(false);
        setRemark('');
      } else {
        console.error('Failed to add stock');
      }
    } catch (error) {
      console.error('Error adding stock:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      // Send DELETE request to backend
      const response = await axios.delete(`http://localhost:3008/api/v1/watchlist/delete/${id}`);

      if (response.status === 200) {
        console.log('Stock deleted:', response.data);
        // Update the watchlist by removing the deleted stock
        setWatchList(watchList.filter((stock) => stock.id !== id));
      } else {
        console.error('Failed to delete stock');
      }
    } catch (error) {
      console.error('Error deleting stock:', error);
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

      {/* Add Stock to Watch List */}
      <div className='my-8 shadow-md rounded-lg bg-white p-6'>
        <h4 className='font-semibold text-xl mb-4 text-black-600'>Add Stock to Watch List</h4>
        <form onSubmit={handleSubmit}>
          {/* Stock Name */}
          <div className='mb-4'>
            <label htmlFor='stockName' className='block text-gray-700 font-medium mb-2'>
              Stock Name
            </label>
            <input
              type='text'
              id='stockName'
              value={stockName}
              onChange={(e) => setStockName(e.target.value)}
              placeholder='Enter stock name...'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500'
              required
            />
          </div>

          {/* Stock Symbol */}
          <div className='mb-4'>
            <label htmlFor='symbol' className='block text-gray-700 font-medium mb-2'>
              Symbol
            </label>
            <input
              type='text'
              id='symbol'
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder='Enter stock symbol...'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500'
              required
            />
          </div>

          {/* Analyzed Checkbox */}
          <div className='mb-4'>
            <label className='inline-flex items-center'>
              <input
                type='checkbox'
                checked={analysed}
                onChange={() => setAnalysed(!analysed)}
                className='form-checkbox'
              />
              <span className='ml-2 text-gray-700 font-medium'>Analysed</span>
            </label>
          </div>

          {/* Remarks */}
          <div className='mb-4'>
            <label htmlFor='remark' className='block text-gray-700 font-medium mb-2'>
              Remarks
            </label>
            <input
              type='text'
              id='remark'
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              placeholder='Add remarks...'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-500'
            />
          </div>

          <button
            type='submit'
            className='w-full p-3 bg-black text-white font-bold rounded-lg hover:bg-black-700 transition duration-300'
          >
            Add to Watch List
          </button>
        </form>
      </div>

      {/* Watch List */}
      <div>
        <h4 className='font-semibold text-xl m-4 text-black'>Your Watch List</h4>

        {watchList.length === 0 ? (
          <p className='text-gray-500'>No stocks in the watch list yet</p>
        ) : (
          <table className='min-w-full table-auto border-collapse'>
            <thead>
              <tr className='bg-gray-100'>
                <th className='px-4 py-2 border text-left'>ID</th>
                <th className='px-4 py-2 border text-left'>Stock</th>
                <th className='px-4 py-2 border text-left'>Symbol</th>
                <th className='px-4 py-2 border text-left'>Analysed</th>
                <th className='px-4 py-2 border text-left'>Remarks</th>
                <th className='px-4 py-2 border text-center'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {watchList.map((stock) => (
                <tr key={stock.id} className='border'>
                  <td className='px-4 py-2 border text-gray-700 font-medium'>{stock.id}</td>
                  <td className='px-4 py-2 border text-gray-700 font-medium'>{stock.stockName}</td>
                  <td className='px-4 py-2 border text-gray-700 font-medium'>{stock.symbol}</td>
                  <td className='px-4 py-2 border text-center'>{stock.analysed ? 'Yes' : 'No'}</td>
                  <td className='px-4 py-2 border text-gray-700 font-medium'>{stock.remark}</td>
                  <td className='px-4 py-2 border text-center'>
                    <button
                      onClick={() => handleDelete(stock.id)}
                      className='text-red-500 hover:text-red-700 font-bold'
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Page;
