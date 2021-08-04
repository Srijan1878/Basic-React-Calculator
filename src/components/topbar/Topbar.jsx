import React from "react";
import { NavLink } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLogo">
          {/* Illustration for the topbar logo */}
        <svg
          width="245"
          height="234"
          viewBox="0 0 245 234"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="topbarLogoIcon"
        >
          <g id="Group">
            <path
              id="Signs"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M38.242 185.72L3.947 151.425L16.675 138.697L50.97 172.992L85.264 138.697L97.992 151.425L18.796 230.621L6.068 217.893L38.242 185.72ZM42.5 42.5H0V60.5H103V42.5H60.5V0H42.5V42.5ZM60 74.5V104.5H42V74.5H60ZM73.244 195.973L98.346 221.075L85.618 233.803L60.516 208.701L73.244 195.973ZM142 42H245V60H142V42ZM142 176H245V194H142V176ZM194 159C187.373 159 182 153.627 182 147C182 140.373 187.373 135 194 135C200.627 135 206 140.373 206 147C206 153.627 200.627 159 194 159ZM194 234C187.373 234 182 228.627 182 222C182 215.373 187.373 210 194 210C200.627 210 206 215.373 206 222C206 228.627 200.627 234 194 234Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <ul className="topbarList">
        <NavLink exact to="/" style={{ textDecoration: "none" }}>
          <li className="topbarListItem">Home</li>
        </NavLink>

        <li>
          <NavLink
            to="/add"
            className="topbarListItem"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Add
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/subtract"
            className="topbarListItem"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Subtract
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/multiply"
            className="topbarListItem"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Multiply
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/divide"
            className="topbarListItem"
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            Divide
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
