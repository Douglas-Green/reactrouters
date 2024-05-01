/** @format */
import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";

export function HomePage() {
  return (
    <div className='home-page'>
      <div className='header'>
        <NavLink
          to='/'
          className='home-link'>
          Home
        </NavLink>{" "}
        <h1 className='home-title'>
          {"Studio Ghibli Movies".split(" ").map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {Array.from(word).map((char, charIndex) => (
                <span
                  key={charIndex}
                  className='char'>
                  {char}
                </span>
              ))}
              {wordIndex < 2 && <span>&nbsp;</span>}
            </React.Fragment>
          ))}
        </h1>{" "}
        <NavLink
          to='/films'
          className='films-link'>
          {" "}
          Films
        </NavLink>{" "}
      </div>{" "}
    </div>
  );
}
