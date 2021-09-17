
import React, {useEffect} from 'react';
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/layout/AddLogModal';
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
        <AddButton/>
        <AddLogModal/>
        <Logs/>
      </div>
    </div>
  );
}

export default App;
