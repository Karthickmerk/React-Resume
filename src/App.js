import './App.css';
import Layout from './components/Layout/Layout'
import  Preview  from './components/Preview/Preview';
import UserCustomStyle from './components/UserStyles/UserCustomStyle';
function App() {
  return (
    <div className="row " >
      <Layout/>
      {/* <Preview/> */}
      <UserCustomStyle/>
    </div>
  );
}

export default App;
