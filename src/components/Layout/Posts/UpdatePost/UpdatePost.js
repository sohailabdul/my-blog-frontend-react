import React from 'react';
import { Component } from 'react';
import './UpdatePost.css';
import axios from 'axios';

class NewPost extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 NewPost">
                    <h1>Update Post</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input name="title" type="text" className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Body:</label>
                            <textarea name="body" className="form-control" onChange={this.handleChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;