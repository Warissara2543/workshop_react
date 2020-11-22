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
import MainPages from './pages/MainPages';
import Topbar from './components/Topbar';


const StyledWrapper = styled.div`

`

function App() {
  return (
    <StyledWrapper >

      <Switch>

        <Route path="/Register">
          <Register />
        </Route>

        <Route path="/LoginPages">
          <LoginPages/>
        </Route>

        <Route path="/">
          <MainPages />
        </Route>

      </Switch>
    </StyledWrapper>
  )

}

export default App;