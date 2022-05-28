import logo from './logo.svg';
import './App.css';

import Home from "./component/Home.js"
//import Losowanie from "./component/Losowanie"
import Onas from "./component/Onas"

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";


const App = () => {
  return (
    <Router> 
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/onas" element={<Onas/>}/>
           
        </Routes> 
    </Router>
  );
}

export default App;
