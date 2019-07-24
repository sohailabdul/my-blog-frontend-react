import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className="Post" onClick={props.delete}>
            <h6>{props.title}</h6>
            <p>{props.body}</p>
        </div>
    );
}

export default Post;