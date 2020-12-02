import React, { useContext } from 'react'
import { Context } from './Context'

export default function Comment() {
    const { state, dispatch } = useContext(Context);
    // const { newComment } = state;

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
          likes: [],
        };
        const findId = facebookData.find((data) => data.id);
        dispatch({
          type: "All_DATA",
          allFacebookData: [...findId.comments, newComment],
        });
        findId.comments = [...findId.comments, newComment];
        form.reset();
        console.log(newComment);
      };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="comment"/>
            <button type="submit">Post</button>
        </form>
    )
}
