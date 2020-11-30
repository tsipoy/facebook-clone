import React, {useContext} from 'react';
import {Context} from "./Context";
import Styled from "styled-components";

export default function FacebookContent() {
    const {facebookData, handleSubmit, newComment} = useContext(Context);
    const MainContent = Styled.div `
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
            width: 50%;
            height: auto;
        }

        .profilePicture {
            max-width: 10%;
            border-radius: 50%;
        }
    `;

    const mapData = facebookData.map((data) => ( 
        <MainContent key={data.id}>
            <ul>
                <li>
                    <img src={data.profilePicture} className="profilePicture" />
                    <span>{data.userName}</span>
                </li>
                <li>{data.date}</li>
            </ul>
            <p>{data.text}</p>
            <img src={data.image} />
            <p>{data.likes}</p>
            <div>
                <ul>
                    <li>
                        <img src={data.profilePicture1} className="profilePicture" />
                        <span>{data.userCommented1}</span>
                    </li>
                    <li>{data.commentedDate}</li>
                </ul>
                <p>{data.textMessage1}</p>
            </div>
            <div>
                <ul>
                    <li><img src={data.profilePicture2} className="profilePicture" />{data.userCommented2}</li>
                    <li>{data.commentedDate2}</li>
                </ul>
                <p>{data.textMessage2}</p>
            </div>
        </MainContent>
    ));
    
    return (
        <div>
            {mapData}
            <p>{newComment.comment}</p>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="comment"/>
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    )
}
