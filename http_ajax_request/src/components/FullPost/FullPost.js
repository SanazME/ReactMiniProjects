import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    state = {
        selectedPost: {}
    }

    componentDidUpdate() {
        if (this.props.id) {
            // to avoid infinite loop of updating and sending request inside the componentDidUpdate when the state changes inside it, we need to add these condition to only updates the component according to:
            if (!this.state.selectedPost || (this.state.selectedPost && this.state.selectedPost.id !== this.props.id)) {
                // this is an ansyn action and so we should not immediately use this.state.selectedPost in the next selectionm because it might not be returned and be still undefined.
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id).then(
                    response => {
                        console.log(response.data)

                        this.setState({
                            selectedPost: response.data
                        })
                    }
                )
            }
        }
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

        if (this.props.id) {
            let post = <p style={{ textAlign: "center" }}>Loading ...</p>
        }

        if (this.state.selectedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.selectedPost.title}</h1>
                    <p>{this.state.selectedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;