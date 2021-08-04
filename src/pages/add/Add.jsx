import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./add.css";

export default function Add() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    firstNumber: "",
    secondNumber: "",
  });
  const [sum, setSum] = useState();
  const AddHandler = () => {
    setSum();

    /*Checking if the input is a number*/
    const regex = new RegExp(/^[0-9]+$/);
    if (regex.test(value.firstNumber) && regex.test(value.secondNumber)) {
      setTimeout(() => {
          
        //setting error to false if the input is a number
        setError(false);

        //converting the input to an integer
        let firstValue = parseInt(value.firstNumber);
        let secondValue = parseInt(value.secondNumber);
        setSum(firstValue + secondValue);
        setValue({
          firstNumber: "",
          secondNumber: "",
        });
      }, 1);
    } else {
      setError(true);
    }
  };
  return (
    <div className="outerContainer">
      <Topbar />
      <h4 className="pageTitle">ADDITION</h4>
      <div className="heroContainer">
        <div className="AddSectionContainer">
          <div className="numberInputsContainer">
            <input
              type="text"
              placeholder="0"
              className="firstInput"
              onChange={(e) => {
                setValue({ ...value, firstNumber: e.target.value });
              }}
              value={value.firstNumber}
            />
            <input
              type="text"
              placeholder="0"
              className="secondInput"
              onChange={(e) => {
                setValue({ ...value, secondNumber: e.target.value });
              }}
              value={value.secondNumber}
            />
          </div>
          <button className="addButton" onClick={AddHandler}>
            ADD
          </button>
          {error && (
            <p style={{ color: "red", fontSize: "20px", marginTop: "8px" }}>
              Invalid Input
            </p>
          )}
          <h4 className={sum === 0 || sum ? "resultShown" : "resultHidden"}>
            {sum === 0 || sum ? `Result: ${sum}` : ""}
          </h4>
        </div>
      </div>
    </div>
  );
}
