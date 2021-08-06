import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import { Helmet } from "react-helmet";
export default function Add() {
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    firstNumber: "",
    secondNumber: "",
  });
  const [multiplication, setMultiplication] = useState();
  const divideHandler = () => {
    setMultiplication();

    /*Checking if the input is a number*/
    const regex = new RegExp(/^[0-9]+$/);
    if (regex.test(value.firstNumber) && regex.test(value.secondNumber)) {
      setTimeout(() => {

        //setting error to false if the input is a number
        setError(false);

        //converting the input to an integer
        let firstValue = parseInt(value.firstNumber);
        let secondValue = parseInt(value.secondNumber);
        setMultiplication(firstValue * secondValue);
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
    <>
    <Helmet>
      <title>Multiply</title>
    </Helmet>
    <div className="outerContainer">
      <Topbar />
      <h4 className="pageTitle">MULTIPLICATION</h4>

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
          <button className="addButton" onClick={divideHandler}>
            Multiply
          </button>
          {error && (
            <p style={{ color: "red", fontSize: "20px", marginTop: "8px" }}>
              Invalid Input
            </p>
          )}
          <h4
            className={
              (multiplication === 0) | multiplication
                ? "resultShown"
                : "resultHidden"
            }
          >
            {(multiplication === 0) | multiplication
              ? `Result: ${multiplication}`
              : ""}
          </h4>
        </div>
      </div>
    </div>
    </>
  );
}
