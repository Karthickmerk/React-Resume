import React, { useEffect, useState } from "react";
import "./FontColor.css";
import styled from "styled-components";

// const Button = styled.button`
//   border-radius: 100%;
//   border: none;
//   cursor: pointer;
//   height: 1.5rem;
//   width: 1.5rem;
//   display: block;
//   z-index: 10;
//   -webkit-transition: all 0.2s;
//   transition: ease-in-out 0.2s;
//   &:hover,
//   &:focus {
//     border: 3px solid;
//     border-radius: 100%;
//     border-color: rgb(0, 255, 128);
//   }
// `;

const ColorInput = styled.input.attrs({ type: "color", defaultValue: "#ffff" })`
  border-radius: 100%;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  margin: -1px 4px 1px 5px;
  border: 1px solid;
  cursor: pointer;
  overflow: hidden;
  padding: 2px;
  &::-webkit-color-swatch {
    border: none;
    border-radius: 100%;
  }
  &::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 100%;
  }
`;

const FontColorComponent = ({ colors, type, colorSelected }) => {
  const [getColor, setColor] = useState("#ffff");

  const setSelectedColor = (colorName) => {
    console.log(colorName);
    setColor({ colorName });
    colorSelected(colorName);
  };

  return (
    <div
      className="d-flex flex-row flex-wrap align-items-center "
      style={{ gap: "5px" }}
    >
      <div className="custom-radios">
        {colors.map((item) => (
          <div key={type + item + "5"}>
            <input
              type="radio"
              key={item}
              id={type + item}
              name={type + "color"}
              value={item}
              onChange={(e) => {
                setSelectedColor(item);
              }}
            />
            <label
              htmlFor={type + item}
              key={item + "1"}
              onSelect={(e) => {
                setSelectedColor(item);
              }}
            >
              <span style={{ backgroundColor: item }} key={item + "2"}>
                <i className="fas fa-check"></i>
              </span>
            </label>
          </div>
        ))}
        Or
        <ColorInput
          onClick={(e) => {
            setSelectedColor(e.target.value);
          }}
        />
      </div>

      {/* {colors.forEach((item) => (
        <div
          key={item}
          className={getColor.colorName === item ? "selectedItem" : ""}
        >
          <Button
            key={item}
            style={{ background: item }}
            // onClick={(e) => setColor({ ...setColor, item })}
            onClick={(e) => {
              setSelectedColor(item);
              e.target.blur();
            }}
          ></Button> */}
    </div>
    //)
    //)
    //}

    // </div>
  );
};

export default FontColorComponent;
