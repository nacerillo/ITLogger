
import React, {useEffect} from 'react';

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import {Provider} from 'react-redux';
import store from './store';

import Logs from './components/logs/Logs';
import SearchBar from './components/layout/SearchBar';
import AddButton from './components/layout/AddButton';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/technicians/AddTechModal';
import TechListModal from './components/technicians/TechListModal';
import "./app.css";

const App = () => {
   useEffect(() => {
      //initializes materialize JS 
      M.AutoInit();
    });
  return (
    <Provider store = {store}>
    <div className="App">
      <SearchBar/>
      <div className = "contianer" id = "app-container">
        <AddButton/>
        <AddLogModal/>
        <EditLogModal/>
        <AddTechModal/>
        <TechListModal/>
        <Logs/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
