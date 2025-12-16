import { useState } from "react";

export default function App() {

  const[amount,setAmount] = useState(10000);
  const[year,setYear] = useState(5);
  const[rate,setRate] = useState(10);
  const[emi,setEmi] = useState(0)

  function handleAmountChange(e){
    setAmount(e.target.value);
  }
  function handleYearChange(e){
    setYear(e.target.value)
  }
  function handleRateChange(e){
    setRate(e.target.value)
  }
  function handleCalculateClick(){
    var P= parseInt(amount);
    var R = parseFloat(rate) /12 /100;
    var N = parseInt(year) * 12;
    var EMI = P*R* (Math.pow(1+R,N)-1);
    setEmi(EMI);
  }

  return (
    <div className="container-fluid bg-secondary p-4" style={{height:"100vh"}}>
      <div>
        <h5 className="text-white text-center">Personal Loan EMI Calculator</h5>
        <div className="bg-white text-black">

          <div className="row p-4 bg-success">
            <div className="col">
              Amount You Need &#8377; <input value={amount} onChange={handleAmountChange} type="number" size='16' />
            </div>
            <div className="col">
             for <input type="number" value={year} size="20"  onChange={handleYearChange}/>
             Years
            </div>
            <div className="col">
              Interest Rate <input type="number" value={rate} onChange={handleRateChange} size='2' />
            </div>
          </div>

          <div className="row p-4 bg-info">
            <div className="col">
              <input type="range" onChange={handleAmountChange} className="form-range"
              min='1000' max='100000' value={amount}
              />
              <div>
                <span>&#8377;1,00,000</span>
                <span className="float-end">&#8377; 10,00,000</span>
              </div>
            </div>
            <div className="col">
              <input type="range" className="form-range" onChange={handleYearChange}
              min='1' max='5' value={year}
              />
              <div>
                <span>1 Year</span>
                <span className="float-end">5 year</span>
              </div>
            </div>
            <div className="col">
              <input type="range" className="form-range" min='10.45' max='18.45' value={rate}
              onChange={handleRateChange} step='0.01'/>
              <div>
                <span>10.45%</span>
                <span className="float-end">18.45%</span>
              </div>
            </div>
          </div>

          <div className="row p-4">
            <div className="col text-center">
              <button onClick={handleCalculateClick} className=" btn btn-primary">Calculate</button>
            </div>
          </div>

          <div className="row p-4">
            <div className="col text-center">
              <div>Your Monthly EMI is 
              <span className="fs-3 fw-bold">
                {emi.toLocaleString('en-in', {style: 'currency', currency:'INR'})}
              </span> 
                For next {year*12} months              
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
