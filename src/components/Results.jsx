import { calculateInvestmentResults } from "../util/investment.js"
import { formatter } from "../util/investment.js"

export default function Results({userEntries}){
 
  const calculatedResult = calculateInvestmentResults(userEntries)
  
    return ( 
      <table id="result">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Investment Value</th>
            <th scope="col">Interest (Year)</th>
            <th scope="col">Total Interest</th>
            <th scope="col">Invested Capital</th>
         </tr>
        </thead>
        <tbody>
          {calculatedResult.map((line) => (
            <tr key={line.year}>
              <td>{line.year}</td>
              <td>{formatter.format(line.valueEndOfYear)}</td>
              <td>{formatter.format(line.interest)}</td>
              <td>{formatter.format(line.totalInterest)}</td>
              <td>{formatter.format(line.totalInvestment)}</td>
            </tr>

          ))}
        </tbody>
      </table>
    );
};