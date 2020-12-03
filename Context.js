import React, { useEffect, useReducer } from "react";
import postData from "./postData.json";
import currentUserData from "./currentUserData.json";

const Context = React.createContext();

const initialValue = {
  facebookData: postData,
  currentUser: currentUserData,
};
console.log(initialValue);

function ContextProvider({ children }) {
  // const [state, dispatch] = reducer();
  // const {facebookData, currentUser, newComment} = state;
  //  cons [state, dispatch] = useReducer(func, initialValue)
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        // case "All_DATA":
        //   return { ...state, facebookData: state.postData };
        //   break;
        // case "CURRENT_USER":
        //   return { ...state, currentUser: state.currentUserData };
        //   break;
        case "NEW_COMMENT":
          const newPosts = state.facebookData.map((post) => {
            console.log(action);
            console.log(post);
            if (post.postId === action.postId) {
              // update the post
              return {
                ...post,
                comments: [...post.comments, action.comment],
              };
            }
            return post;
          });
          return {
            ...state,
            posts: newPosts,
          };
          break;
        case "NEW_POST":
          return { ...state, facebookData: state.facebookData };
        default: {
          console.log("No action defined for", actio.type);
          break;
        }
      }
      return state;
    },
    // facebookData: [],
    // currentUser: [],
    // newComment: {},
    initialValue
  );
  // const [facebookData, currentUser] = state
  // useEffect(() => {
  //   // setFacebookData(postData)
  //   // setCurrentUser(currentData)
  //   dispatch({ type: "All_DATA", facebookData: [...postData] });
  //   dispatch({ type: "CURRENT_USER", currentUser: [...currentUserData] });
  //   dispatch({ type: "NEW_COMMENT" });
  // }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
