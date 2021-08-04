import React, { useState } from "react";
import "./subtract.css";
import Topbar from "../../components/topbar/Topbar";
export default function Add() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    firstNumber: "",
    secondNumber: "",
  });
  const [difference, setDifference] = useState();
  const subtractHandler = () => {
    setDifference();

    /*Checking if the input is a number*/
    const regex = new RegExp(/^[0-9]*$/);
    if (regex.test(value.firstNumber) && regex.test(value.secondNumber)) {
      setTimeout(() => {
        //setting error to false if the input is a number
        setError(false);

        //converting the input to an integer
        let firstValue = parseInt(value.firstNumber);
        let secondValue = parseInt(value.secondNumber);
        setDifference(firstValue - secondValue);
      }, 1);
    } else {
      setError(true);
    }
  };
  return (
    <div className="outerContainer">
      <Topbar />
      <div className="pageTitle">SUBTRACTION</div>
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
          <button className="addButton" onClick={subtractHandler}>
            Subtract
          </button>
          {error && (
            <p style={{ color: "red", fontSize: "20px", marginTop: "8px" }}>
              Invalid Input
            </p>
          )}
          <h4
            className={
              difference === 0 || difference ? "resultShown" : "resultHidden"
            }
          >
            {difference === 0 || difference ? `Result: ${difference}` : ""}
          </h4>
        </div>
      </div>
    </div>
  );
}
