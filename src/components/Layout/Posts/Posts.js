import React, { Component } from 'react';
import Post from 'components/Layout/Posts/Post/Post';
import axios from 'axios';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                if (!res.data) {
                    return;
                }

                let posts = res.data;
                posts = posts.slice(0, 10);
                // console.log(JSON.stringify(posts));
                this.setState({
                    posts: posts
            });
        });
    }

    deletePostHandler = (id) => {
        const posts = [...this.state.posts];
        const postIndex = posts.findIndex( (post) => post.id === id);

        posts.splice(postIndex, 1);

        this.setState({
            posts: posts
        });
    }

    // handleDelete = (event) => {
    //     event.preventDefault();

    //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.posts.id}`)
    //     .then(res => {
    //         console.log(res.data);
    //     });
    // }

    render() {
        return (
            <div>
                {this.state.posts.map(post => {
                    return <Post title={post.title} body={post.body} key={post.id}
                    delete={ () => this.deletePostHandler(post.id) } />
                })}
            </div>
        );
    }
}

export default Posts;