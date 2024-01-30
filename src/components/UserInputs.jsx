
export default function UserInputs({ onInputChange, valueOfInput }){

    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial Investment</label>
                    <input onChange={(event) => onInputChange("initialInvestment", event.target.value) } value={valueOfInput.initialInvestment} type="number" required></input>
                </div>
                <div>
                    <label>Annual Investment</label>
                    <input onChange={(event) => onInputChange("annualInvestment", event.target.value) } value={valueOfInput.annualInvestment} type="number" required></input>
                </div>
                <div>
                    <label>Expected Returns</label>
                    <input onChange={(event) => onInputChange("expectedReturn", event.target.value) } value={valueOfInput.expectedReturn} type="number" required></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input onChange={(event) => onInputChange("duration", event.target.value) } value={valueOfInput.duration} type="number" required></input>
                </div>
            </div> 
        </section>
    );
};