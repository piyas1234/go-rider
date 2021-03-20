import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Navbody from './body/navigatoin/Navbody'
import Navlink from './body/navigatoin/Navlink'
import React, { createContext, useState } from 'react';
export const UserContext = createContext();
 


function App() {
  const [loggedinUser, setloggedinUser] = useState({})
  const [goRider, setgoRider] = useState({})
  const [riderPlace, setriderPlace] = useState({})

  return (
    <UserContext.Provider className="App" value={[loggedinUser, setloggedinUser,goRider, setgoRider,riderPlace, setriderPlace]} > 
    <BrowserRouter>
          <Navbody></Navbody>
          <Navlink></Navlink>
        </BrowserRouter>
    </UserContext.Provider>
);
}

export default App;

