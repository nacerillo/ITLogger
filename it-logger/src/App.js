
import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import "./app.css"
const App = () => {
   useEffect(() => {
      //initializes materialize JS 
      M.AutoInit();
    });
  return (
    <div className="App">
      <SearchBar/>
      <div className = "contianer" id = "app-container">
        <Logs/>
      </div>
    </div>
  );
}

export default App;
