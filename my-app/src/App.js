import React from 'react'
import Login from "./componentes/Login";
import { BrowserRouter as Router } from "react-router-dom";
import FormLogin from "./componentes/FormLogin";


const App = () => {
  return (
    <Router>
      <div container>
        <Login />
        <FormLogin />
      </div>
    </Router>
  );
}

export default App
