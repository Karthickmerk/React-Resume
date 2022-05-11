import './App.css';
import Layout from './components/Layout'
import { Preview } from './components/Preview';
import { UserCustomStyle } from './components/UserCustomStyle';
function App() {
  return (
    <div className="row " style={{height:"100vh" , overflow:"hidden"}}>
      <Layout/>
      <Preview/>
      <UserCustomStyle/>
    </div>
  );
}

export default App;
