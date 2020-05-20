import React from 'react';
import axios from 'axios';

export default props => {
    const {authorId, successCallback} = props;
    

    const DeleteAuthor = e => {
        axios.delete('http://localhost:8001/api/authors/' + authorId)
        .then(res => {
            successCallback();
        })
    }

    return (
        <a href="#"  onClick = {DeleteAuthor}>
            Delete
        </a>
    )
}