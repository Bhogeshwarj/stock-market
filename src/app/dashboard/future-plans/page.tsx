import React from 'react'

function Page() {
  return (
    <div className="container mx-auto shadow-lg p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
      <div className="p-10 rounded-lg bg-white text-center shadow-md">
        <h2 className="font-bold text-3xl text-black mb-4">📋 Software Roadmap 📋</h2>
        <p className="text-gray-700 mb-4">What are the plans for this software?</p>
      </div>

      <div className="p-10 rounded-lg bg-white text-center shadow-md mt-10">
        <h3 className="font-semibold text-2xl mb-4">🔧 Software Vision 🔧</h3>
        <p className="text-gray-700 mb-4">The software will be a free, open-source platform aimed at empowering users with comprehensive financial analysis tools.</p>
        <p className="text-gray-700 mb-4">Here is the checklist for completing the software:</p>
        
        <div className="text-left mx-auto inline-block">
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2"><span className="font-bold">Backend Development:</span> Implement a robust backend using Prisma and PostgreSQL.</li>
            <li className="mb-2"><span className="font-bold">User Authentication:</span> Enable users to log in and securely save their data.</li>
            <li className="mb-2"><span className="font-bold">Watchlist Feature:</span> Allow users to create and manage a watchlist of companies for fundamental analysis and other purposes.</li>
            <li className="mb-2"><span className="font-bold">Data Storage:</span> Users can store detailed information and reviews for each company as they progress through the analysis stages.</li>
            <li className="mb-2"><span className="font-bold">AI Integration:</span> Plan to integrate AI for data extraction, enabling automatic analysis of annual reports to provide key insights.</li>
            <li className="mb-2"><span className="font-bold">Future Enhancements:</span> Expand the software to include technical analysis tools and algorithmic trading features.</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10">
        <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300">
          🌟 Stay Tuned for More Updates 🌟
        </button>
      </div>
    </div>
  )
}

export default Page
