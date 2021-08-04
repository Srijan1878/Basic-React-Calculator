import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./divide.css";

export default function Add() {
  const [value, setValue] = useState({
    firstNumber: "",
    secondNumber: "",
  });
  const [error, setError] = useState(false);
  const [division, setDivision] = useState();
  const [remainder, setRemainder] = useState();
  const divideHandler = () => {
    setDivision();
    setRemainder();

    /*Checking if the input is a number*/
    const regex = new RegExp(/^[0-9]*$/);
    if (regex.test(value.firstNumber) && regex.test(value.secondNumber)) {
      setTimeout(() => {
        //setting error to false if the input is a number
        setError(false);

        //converting the input to a integer
        let firstValue = parseInt(value.firstNumber);
        let secondValue = parseInt(value.secondNumber);
        setDivision(Math.floor(firstValue / secondValue));
        setRemainder(Math.floor(firstValue % secondValue));
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
      <h4 className="pageTitle">DIVISION</h4>
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
            Divide
          </button>
          <h4 className={division ? "resultShown" : "resultHidden"}>
            {division ? `Result: ${division}` : ""}
          </h4>
          {error && (
            <p style={{ color: "red", fontSize: "20px", marginTop: "8px" }}>
              Invalid Input
            </p>
          )}
          {/* <h4 className={remainder?"resultShown":"resultHidden"}>{remainder?`Result: ${remainder}`:''}</h4>      */}
          <h4
            className={
              remainder === 0 || remainder
                ? "remainderShown"
                : "remainderHidden"
            }
          >
            {remainder === 0 || remainder ? `Remainder: ${remainder}` : ""}
          </h4>
        </div>
      </div>
    </div>
  );
}
