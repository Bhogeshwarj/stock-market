import React from 'react'

function Stage1() {
  return (
    <div>
        <div className="text-left mx-auto inline-block">
          <h4 className="font-semibold text-xl mb-2">Questions and Rationale Behind Understanding the Business</h4>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Sl No</th>
                <th className="px-4 py-2 border">Question</th>
                <th className="px-4 py-2 border">The Rationale Behind the Question</th>
                <th className="px-4 py-2 border">Completed</th>
                <th className="px-4 py-2 border">User Review</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "What does the company do?", "To get a basic understanding of the business"],
                ["2", "Who are its promoters? What are their backgrounds?", "To know the people behind the business. Sanity check to eliminate criminal background, intense political affiliation etc"],
                ["3", "What do they manufacture (in case it is a manufacturing company)?", "To know their products better, helps us get a sense of the product’s demand-supply dynamics"],
                ["4", "How many plants do they have and where are they located?", "To get a sense of their geographic presence. Also at times, their plants could be located in a prime location, and the value of such location could go off-balance sheet, making the company highly undervalued"],
                ["5", "Are they running the plant in full capacity?", "Gives us an idea on their operational abilities, demand for their products, and their positioning for future demand"],
                ["6", "What kind of raw material is required?", "Helps us understand the dependency of the company. For example, the raw material could be regulated by Govt (like Coal) or the raw material needs to be imported either of which needs further investigation"],
                ["7", "Who are the company’s clients or end-users?", "By knowing the client base, we can get a sense of the sales cycle and efforts required to sell the company’s products"],
                ["8", "Who are their competitors?", "Helps in knowing the competitors. Too many competing companies means margin pressure. In such a case, the company has to do something innovative. Margins are higher if the company operates in – monopoly, duopoly, or oligopoly market structure"],
                ["9", "Who are the major shareholders of the company?", "Besides the promoter and promoter group, it helps to know who else owns the company’s shares. If a highly successful investor holds the shares in the company, then it could be a good sign"],
                ["10", "Do they plan to launch any new products?", "Gives a sense of how ambitious and innovative the company is. While at the same time a company launching products outside their domain raises some red flags – is the company losing focus?"],
                ["11", "Do they plan to expand to different countries?", "Same rationale as above"],
                ["12", "What is the revenue mix? Which product sells the most?", "Helps us understand which segment (and therefore, the product) is contributing the most to revenue. This in turns helps us understand the drivers for future revenue growth"],
                ["13", "Do they operate under a heavy regulatory environment?", "This is both good and bad – Good because it acts a natural barrier from new competition to enter the market, bad because they are limited with choices when it comes to being innovative in the industry"],
                ["14", "Who are their bankers, auditors?", "Good to know, and to rule out the possibility of the companies associated with scandalous agencies"],
                ["15", "How many employees do they have? Does the company have labour issues?", "Gives us a sense of how labour-intensive the company’s operations are. Also, if the company requires a lot of people with a niche skillset, then this could be another red flag"],
                ["16", "What are the entry barriers for new participants to enter the industry?", "Helps us understand how easy or difficult it is for new companies to enter the market and eat away the margins"],
                ["17", "Is the company manufacturing products that can be easily replicated in a country with cheap labour?", "If yes, the company may be sitting on a time bomb – think about companies manufacturing computer hardware, mobile handsets, garments etc"],
                ["18", "Does the company have too many subsidiaries?", "If yes, you need to question why? Is it a way for the company to siphon off funds?"]
              ].map((row, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{row[0]}</td>
                  <td className="border px-4 py-2">{row[1]}</td>
                  <td className="border px-4 py-2">{row[2]}</td>
                  <td className="border px-4 py-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border px-4 py-2 text-center">
                  <input type="text" placeholder="Add your review" className="w-full px-2 py-1" />
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
<div>
<div className="mt-10 text-left mx-auto inline-block">
          <h4 className="font-semibold text-xl mb-2">Stage 1 Summary</h4>
          <p className="text-gray-700">
            These questions are thought starters for understanding any company. In finding answers, you will automatically start posting new questions for which you will have to find answers. This process will enhance your understanding of the company significantly.
          </p>
          <p className="text-gray-700 mt-4">
            Remember, this is the first step in the equity research process. If you find red flags during this stage, drop researching the company further irrespective of how attractive the business looks.
          </p>
        </div>
</div>
    </div>
)}

export default Stage1
