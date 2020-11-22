import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import Topbar from '../components/Topbar';
import AddWord from './AddWord';
import HomePages from './HomePages';

function MainPages() {
    return (
        <div>

            <Topbar />

            <Switch>

                <Route path="/AddWord">
                    <AddWord />
                </Route>

                <Route path="/">
                    <HomePages />
                </Route>

            </Switch>
        </div>
    )
}

export default MainPages
