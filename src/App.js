import styled from 'styled-components';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePages from './pages/HomePages';
import Register from './pages/Register';
import AddWord from './pages/AddWord';
import LoginPages from './pages/LoginPages';

const StyledWrapper = styled.div`

`

function App() {
  return (
    <StyledWrapper >
      <Switch>

        <Route path="/register">
          <Register/>
        </Route>

        <Route path="/login">
          <LoginPages/>
        </Route>

        <Route path="/add-word">
          <AddWord/>
        </Route>

        <Route path="/">
          <HomePages/>
        </Route>

      </Switch>
    </StyledWrapper>
)
    

}

export default App;