import React, {useState, useEffect} from 'react';
import FacebookData from './faceBookData.json'

const Context = React.createContext();

function ContextProvider({children}) {
    const [facebookData, setFacebookData] = useState(FacebookData);
    const [newComment, setNewComment] = useState(""); 

    useEffect(() => {
        setFacebookData(FacebookData)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let inputValue = form.comment.value;
        setNewComment(inputValue);
        // const newComment = {
        //     id: Date.now(),
        //     comment: inputValue
        // }
        // setFacebookData([...facebookData, newComment])
        // form.reset();

    }

    return (
        <Context.Provider value={{facebookData, handleSubmit, newComment}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};

