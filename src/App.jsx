import UserInputs from "./components/userInputs.jsx"
import Results from "./components/Results.jsx"

import { useState } from "react";

function App() { 

  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration:10
});

const inputIsValid = inputValue.duration > 0

function handleInputChange(inputIdentifier, newValue) {
  setInputValue(previousValues => {
      return {
      ...previousValues,
      [inputIdentifier]: parseInt(newValue, 10)
      }
  })
}
 
  return (
    <main>
      <UserInputs onInputChange={handleInputChange} valueOfInput={inputValue} />
      {inputIsValid ?  <Results userEntries={inputValue}></Results> : <p className="center">Invalid Input. Please enter a duration greater than 0.</p>}
    </main>
 )
 
}

export default App
