import React, { Component } from 'react';
import Posts from './Posts/Posts';

class Layout extends Component {

    styleTest = {
        background: '#ccc'
    }
    render() {
        return (
            <div style={this.styleTest}>
                <Posts/>
            </div>
        );
    }
}

export default Layout;