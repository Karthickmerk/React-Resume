import "./App.css";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import Layout from "./components/Layout/Layout";
import Preview from "./components/Preview/Preview";
import UserCustomStyle from "./components/UserStyles/UserCustomStyle";

function App() {
  const divStyles = { height: "100vh" };
  return (
    <div className="row " style={divStyles}>
      <Layout />
      {/* <Preview/> */}
      {/* <UserCustomStyle /> */}
      <ColorPalette />
    </div>
  );
}

export default App;
