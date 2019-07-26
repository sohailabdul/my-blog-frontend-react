import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';

const Post = (props) => {
    return (
        <div className="Post">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <p className="card-text">{props.body}</p>
                <div className="Button">
                <Link to="/edit-post"><button className="btn btn-primary btn-sm" onClick={props.edit}>Edit</button></Link>&nbsp;
                    <button className="btn btn-danger btn-sm" onClick={props.delete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Post;