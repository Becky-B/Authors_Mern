import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

export default ()=>{
    const [name, setName] = useState('');
    const [loaded, setLoaded] = useState(false);

    const addAuthor = (name) => {
        console.log(name)
        axios.post("http://localhost:8001/api/authors/add", {
            name
        })
        .then(res=>{
            setName("")
            navigate("/")
            console.log(res)
        })
        .catch(err=>console.log(err))
        
    }

    return(
        <>
        <div className="row">
            <div className="col-sm">
                <h1>Favorite Authors</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <Link to = {"/"}>Home</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-sm">
                <h5>Add a new author</h5>
                <AuthorForm onSubmitProp={addAuthor} initialName = {name}/>
            </div>
        </div>
        </>
    )
}