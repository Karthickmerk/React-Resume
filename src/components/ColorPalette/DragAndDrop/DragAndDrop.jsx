import React from "react";
import "./DragAndDrop.css";

const DragAndDropComponent = ({ components }) => {
  return components.map((item) => (
    <div key={item.index + "1"} className="dragAndDrop">
      <div key={item.index}> {item.componentName}</div>
    </div>
  ));
};
export default DragAndDropComponent;
