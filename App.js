import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Feed from './Feed';
import Styled from "styled-components";
import AddingPost from './AddingPost';
import Options from "./Options"

export default function App() {

    const DivWrapper = Styled.div `
        header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;
        }

        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: baseline;    
        }

        li {
            list-style: none;
            padding-inline-start: 32px
        }

        a {
            text-decoration: none;
        }
    `;

    return (
        <DivWrapper>
            <header>
                <h1>OnjaBook</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Feed</Link>
                        </li>
                        <li>
                            <Link to="/post">Add a post</Link>
                        </li>
                        <li>
                            <Link to="/userName">UserName</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Feed />
                    </Route>
                    <Route path="/post">
                        <AddingPost />
                    </Route>
                    <Route path="/userName">
                        <Options />
                    </Route>
                </Switch>
            </div>
        </DivWrapper>
    )
}
