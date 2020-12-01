import React, { useContext } from 'react'
import { Context } from './Context'

export default function Comment() {
    const {handleSubmit} = useContext(Context);
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="comment"/>
            <button type="submit">Post</button>
        </form>
    )
}
