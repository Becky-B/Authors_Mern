import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import { navigate } from '@reach/router'
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';


export default props => {
    const {id} = props;
    const [name, setName] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8001/api/authors/" + id)
            .then(res => {
                setName(res.data.name);   
                setLoaded(true);
            })
    },[])

    const editAuthor = (name)=>{
        axios.put("http://localhost:8001/api/authors/" + id, {
            name 
        })
        .then(res => navigate("/"));
    }
    
    return (
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
                <h3>Edit this author</h3>
                {loaded && <AuthorForm onSubmitProp={editAuthor} initialName = {name}/>}
            </div>
        </div>
        </>
    )
}