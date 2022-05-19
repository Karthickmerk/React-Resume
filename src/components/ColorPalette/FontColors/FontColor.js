import React, { useEffect, useState } from "react";
import "./FontColor.css";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 100%;
  border: none;
  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
  display: block;
  z-index: 10;
  -webkit-transition: all 0.2s;
  transition: ease-in-out 0.2s;
  &:hover,
  &:focus {
    border: 3px solid;
    border-radius: 100%;
    border-color: rgb(0, 255, 128);
  }
`;

const ColorInput = styled.input.attrs({ type: "color", defaultValue: "#ffff" })`
  border-radius: 100%;
  height: 1.25rem;
  width: 1.25rem;
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

const FontColorComponent = ({ colors, colorSelected }) => {
  const [getColor, setColor] = useState("#ffff");

  const setSelectedColor = (colorName) => {
    setColor({ colorName });
    colorSelected(colorName);
  };

  return (
    <div
      className="d-flex flex-row flex-wrap align-items-center "
      style={{ gap: "5px" }}
    >
      {colors.map((item) => (
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
          ></Button>
        </div>
      ))}
      Or
      <ColorInput onClick={(e) => setSelectedColor(e.target.value)} />
    </div>
  );
};

export default FontColorComponent;
