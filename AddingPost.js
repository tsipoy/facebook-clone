import React, { useContext } from "react";
import Styled from "styled-components";
import { Context } from "./Context";

export default function AddingPost() {
  const { state, dispatch } = useContext(Context);

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
      likes: [],
    //   commentedDate: "14/08/2020",
    //   userCommented: "Loic",
    //   profilePicture: "https://iili.io/FN9rc7.jpg",
    };

    state.facebookData.push(newLists);
    dispatch({
      type: "NEW_POST",
    });
  };

  const FormWrapper = Styled.div`
        label {
            display: block;
            padding-block-end: 30px;
            padding-block-start: 10px
        }

        input {
            margin-inline-start: 32px;
        }
    `;
  return (
    <FormWrapper>
      <form onSubmit={submitForm}>
        <label>New Post: </label>
        <textarea
          name="thought"
          placeholder="Say what’s on your mind..."
          rows="5"
          cols="33"
        ></textarea>
        <label>
          Picture url:
          <input type="url" name="pictureUrl" />
        </label>
        <button>Post</button>
      </form>
    </FormWrapper>
  );
}
