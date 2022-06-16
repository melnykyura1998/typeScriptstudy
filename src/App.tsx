import React from 'react';
import {Route,Routes,Navigate} from "react-router-dom";

import './App.css';
import {MainLayauts} from "./Layauts/mainLayauts";
import {CarPage} from "./Pages/CarPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainLayauts/>}>
          <Route index element={<Navigate to={'cars'}/>}/>
          <Route path={'cars'} element={<CarPage/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
