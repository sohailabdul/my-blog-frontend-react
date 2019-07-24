import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="Post">
            <h6>{props.title}</h6>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;