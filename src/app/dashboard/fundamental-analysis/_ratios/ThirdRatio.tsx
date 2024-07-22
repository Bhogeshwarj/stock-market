
function Firstratio() {
    return (
      <div>
         <div className=" p-5 rounded-lg ">
        <h2 className="font-bold text-2xl text-blue-600">1st Ratio</h2>
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
  
  export default Firstratio
  
  