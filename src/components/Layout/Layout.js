import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';
import Home from 'components/Layout/Home/Home';
import NewPost from 'components/Layout/Posts/NewPost/NewPost';

class Layout extends Component {

    styleTest = {
        background: '#ccc'
    }
    render() {
        return (
            <div style={this.styleTest}> 
              <Route path="/" exact component={ Home } />                
              <Route path="/posts" exact component={ Posts } />  
              <Route path="/new-post" exact component={ NewPost } />              
            </div>
        );
    }
}

export default Layout;