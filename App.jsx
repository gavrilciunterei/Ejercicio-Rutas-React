import React from "react";

import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Lucida Sans',sans-serif;
        text-align: center;
        background-color: #000;
        color: #fff;
    }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h1>Usuarios</h1>
      <Route exact path="/" component={Users} />
      <Route path="/user/:id" component={User} />
    </BrowserRouter>
  );
};

export default App;
