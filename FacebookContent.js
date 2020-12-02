import React, { useContext } from "react";
import { Context } from "./Context";
import Styled from "styled-components";
import Comment from "./Comment";

export default function FacebookContent() {
  const {state, dispatch} = useContext(Context);
  const { facebookData, currentUser } = state;
  const MainContent = Styled.div`
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-inline-start: 0;
        }

        li {
            list-style: none;
        }

        img {
            width: 100%;
            height: auto;
        }

        .profilePicture {
            max-width: 10%;
            border-radius: 50%;
        }
    `;

  const User = Styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline-start: 0;
    
    li {
        list-style: none;
    }

    .profilePicture {
      max-width: 10%;
      border-radius: 50%;
    }
  `;

  console.log(currentUser);
  const mapCurrentUser = currentUser.map((user) => {
    return (
      <User>
        <li key={user.id}>
          <img src={user.profilePicture} className="profilePicture" />
          <span>{user.userName}</span>
        </li>
        <li>{user.date}</li>
      </User>
    );
  });

  // const mapData = facebookData.map((data) => {
    // return (
    //   <MainContent>
        {/* <p key={data.postId}>{data.text}</p>
        <img src={data.image} alt="commentor" />
        <div>
          {data.comments.map((comment) => {
            return (
              <nav key={comment.id}>
                <ul>
                  <li>
                    <img
                      src={comment.profilePicture}
                      className="profilePicture"
                    />
                    <span>{comment.userCommented}</span>
                  </li>
                  <li>{comment.commentedDate}</li>
                </ul>
                <ul>
                  <li>{comment.textMessage}</li>
                  <li>{comment.message}</li>
                </ul>
              </nav>
            );
          })}
        </div> */}
        {/* <Comment />
      </MainContent> */}
    // );
  // });
  return (
    <>
      {mapCurrentUser}
      {/* {mapData} */}
    </>
  );
}
