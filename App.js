import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import FacebookContent from './FacebookContent';
import Styled from "styled-components";
import AddingPost from './AddingPost';
import UserName from './UserName';

export default function App() {

    const DivWrapper = Styled.div `
        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
        }

        a {
            text-decoration: none;
        }
    `;

    return (
        <DivWrapper>
            <header>
                <h1>OnjaBook</h1>
                <Link to="/">Feed</Link>
                <Link to="/post">Add a post</Link>
                <Link to="/userName">UserName</Link>
            </header>
            <div>
                <Switch>
                    <Route exact path="/">
                        <FacebookContent />
                    </Route>
                    <Route path="/post">
                        <AddingPost />
                    </Route>
                    <Route path="/userName">
                        <UserName />
                    </Route>
                </Switch>
            </div>
        </DivWrapper>
    )
}
