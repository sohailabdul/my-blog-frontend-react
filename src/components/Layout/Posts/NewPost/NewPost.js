import React from 'react';
import { Component } from 'react';
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {

    state = {
        formData: {
            title: '',
            body: ''
        },

        apiCompleteStatus: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log("Submitting form", this.state);
        const post = { ...this.state.formData };
        console.log(post);

        axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
            .then(res => {
                console.log(res.data);
                console.log(res.status);
                this.setState({
                    ...this.state,
                    apiCompleteStatus: true
                });
            });
    }

    handleInputChange = (event) => {
        console.log(event.target.value);

        // let a = 1 == 2 ? 5 : 6;
        const targetName = event.target ? event.target.name : null;
        const targetValue = event.target ? event.target.value : null;
        // console.log(targetName, ' : ', targetValue );

        this.setState({

             formData: {
              ...this.state.formData,   
              [targetName]: targetValue
             }

        });
        //  console.log("State body:", this.state.body);   
    }

    render() {
        const apiResultAlert = (<div className="alert alert-success alert-dismissible fade show">
            <strong>Success!</strong> Your message has been sent successfully.
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
        </div>);

        let dynamicAlert = null;

        if(this.state.apiCompleteStatus) {
            dynamicAlert = apiResultAlert;
        }
        else {
            dynamicAlert = null;
        }

        return (
            <div className="row">
                <div className="col-md-6 NewPost">
                    {dynamicAlert}
                    <h1>New Post</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input name="title" type="text" className="form-control" onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label>Body:</label>
                            <textarea name="body" className="form-control" onChange={this.handleInputChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewPost;