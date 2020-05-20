import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';

export default ()=>{
    const [name, setName] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

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
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
        
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
                {errors.map((err,index) => <p key = {index}>{err}</p>)}
                <AuthorForm onSubmitProp={addAuthor} initialName = {name}/>
            </div>
        </div>
        </>
    )
}