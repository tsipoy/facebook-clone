import React, { useContext } from 'react'
import { Context } from './Context';
import Styled from "styled-components";


export default function UserName() {
    const {state, dispatch} = useContext(Context);
    
    const FormWrapper = Styled.div`
        form {
            display: flex;
            flex-direction: column;
        }

        label {
            padding-block-end: 16px;
        }

        input {
            margin-inline-start: 16px;
        }
    `;

    return (
        <FormWrapper>
            <p>Options: </p>
            <form>
                <label>Username: 
                    <input type="text" name="username" placeholder="Type your name here"/>
                </label>
                <label>Profile Picture: 
                    <input type="url" name="profilePicture" placeholder="Past a URL here" />
                </label>
            </form>
        </FormWrapper>
    )
}
