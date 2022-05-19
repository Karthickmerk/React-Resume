import React, { useEffect, useState } from "react";
import FontColorComponent from "./FontColors/FontColor";
import DragAndDropComponent from "./DragAndDrop/DragAndDrop";

// setColor(colorName) = () => {
//   this.setState({ setPrimaryColor: colorName });
// }

const ColorPalette = () => {
  const primaryColor = ["orange", "black", "red", "yellow"];
  const SecondaryColor = ["black", "red", "yellow", "green"];
  const OtherColors = ["white", "beige", "gray", "black"];
  const DragAndDrop = [
    { index: 1, componentName: "skills" },
    { index: 2, componentName: "education" },
    { index: 3, componentName: "work experience" },
    { index: 4, componentName: "language" },
  ];

  const [getPrimaryColor, setPrimaryColor] = useState("#ffff");
  const [getSecondaryColor, setSecondaryColor] = useState("#ffff");
  const [getOtherColor, setOtherColor] = useState("#ffff");

  return (
    <div className="col-md-3">
      <div className="row ">
        <div
          className="container mt-2 rounded"
          style={{ backgroundColor: "#4F96E7" }}
        >
          <h6 className="text-center"> Profile Theme </h6>
          <br />
          <label> PrimaryColor</label>
          <FontColorComponent
            colors={primaryColor}
            colorSelected={(item) => setPrimaryColor(item)}
          />
          <br />
          <label> SecondaryColor</label>
          <FontColorComponent
            colors={SecondaryColor}
            colorSelected={(item) => setSecondaryColor(item)}
          />
          <br />
          <label> OtherColors</label>
          <FontColorComponent
            colors={OtherColors}
            colorSelected={(item) => setOtherColor(item)}
          />
        </div>
      </div>
      <div className="row">
        <div className="container mt-1 rounded">
          <DragAndDropComponent components={DragAndDrop}></DragAndDropComponent>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
