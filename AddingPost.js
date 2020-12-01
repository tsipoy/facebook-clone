import React, {useContext} from 'react'
import Styled from "styled-components";
import { Context } from './Context';

export default function AddingPost() {
    const {submitForm} = useContext(Context)
    const FormWrapper = Styled.div `
        label {
            display: block;
            padding-block-end: 30px;
            padding-block-start: 10px
        }

        input {
            margin-inline-start: 32px
        }
    `;
    return (
        <FormWrapper>
            <form onSubmit={submitForm}>
                <label>New Post: </label>
                <textarea name="thought" placeholder="Say what’s on your mind..." rows="5" cols="33"></textarea>
                <label>Picture url:
                    <input type="url" name="pictureUrl"/>
                </label>
                <button>Post</button>
            </form>
        </FormWrapper>
    )
}
