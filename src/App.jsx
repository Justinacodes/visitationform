import React from "react";

import '../src/App.css'
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <>
     <Outlet />
    </>
  );
};

export default App;
