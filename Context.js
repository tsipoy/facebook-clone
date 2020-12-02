import React, { useEffect, useReducer } from "react";
import allFacebookData from "./faceBookData.json";
import currentUserData from "./currentUserData.json";

const Context = React.createContext();

function ContextProvider({ children }) {
  // const [facebookData, setFacebookData] = useState(allFacebookData);
  // const [currentUser, setCurrentUser] = useState(currentData)
  // const [newComment, setNewComment] = useState({});

  // const [state, dispatch] = reducer();
  // const {facebookData, currentUser, newComment} = state;

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "All_DATA":
          return { ...state, facebookData: state.allFacebookData };
          break;
        case "CURRENT_USER":
          return { ...state, currentUser: state.currentUserData };
          break;
        case "NEW_COMMENT":
          return { ...state, newComment: state.newComment };
        default:
          return state;
      }
    },
    {
      facebookData: [],
      currentUser: [],
      newComment: {},
    }
  );

  useEffect(() => {
    // setFacebookData(allFacebookData)
    // setCurrentUser(currentData)
    dispatch({ type: "All_DATA", facebookData: [...allFacebookData] });
    dispatch({ type: "CURRENT_USER", currentUser: [...currentUserData] });
    dispatch({ type: "NEW_COMMENT" });
  }, [facebookData, currentUser]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
