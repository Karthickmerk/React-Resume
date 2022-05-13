import './App.css';
import Layout from './components/Layout/Layout'
import  Preview  from './components/Preview/Preview';
import UserCustomStyle from './components/UserStyles/UserCustomStyle';


function App() {
  const divStyles ={height:"100vh"}
  return (
    <div className="row " style={divStyles}>
      <Layout/>
      <Preview/>
      <UserCustomStyle/>
    </div>
  );
}

export default App;
