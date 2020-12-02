import React, {useState, useEffect} from 'react';
import FacebookData from './faceBookData.json'
import currentData from "./currentUserData.json";


const Context = React.createContext();

function ContextProvider({children}) {
    const [facebookData, setFacebookData] = useState(FacebookData);
    const [currentUser, setCurrentUser] = useState(currentData)
    const [newComment, setNewComment] = useState({}); 

    useEffect(() => {
        setFacebookData(FacebookData)
        setCurrentUser(currentData)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let inputValue = form.comment.value;
        // setNewComment(inputValue);
        const newComment = {
            id: Date.now(),
            textMessage: inputValue,
            commentedDate: "14/08/2020",
            userCommented: "Loic",
            profilePicture: "https://iili.io/FN9rc7.jpg",
            likes: []
        }
        const filtered = facebookData.find(data => data.id)
        setNewComment([...filtered.comments, newComment])
        filtered.comments = [...filtered.comments, newComment];
        form.reset();
    }
    console.log(newComment);

    const submitForm = (e) => {
        e.preventDefault();
        let form = e.target;
        let text = form.thought.value;
        let inputValue = form.pictureUrl.value;

        const newLists = {
            id: Date.now(),
            image: inputValue,
            text: text,
            comments: [],
            likes: []
        }

        setFacebookData([...facebookData, newLists])
    }

    return (
        <Context.Provider value={{facebookData, handleSubmit, newComment, submitForm, currentUser}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};

