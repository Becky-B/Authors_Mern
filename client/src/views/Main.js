import React, {useEffect, useState} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';


export default () => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    function grabAuthor(){
        axios.get('http://localhost:8001/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthor(res.data);
                setLoaded(true);
            });
    }

    useEffect(() => {grabAuthor()},[])

    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._Id != authorId));
        grabAuthor();
    }

    return(
        <div className="row">
            <div className="col-sm">
                <h1>Favorite Authors</h1>
                    <div>
                        <Link to = {"/add"}>Add new author</Link>
                                <h4>We have quotes by:</h4>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {author.map((author, i ) => {
                                        return (<tr key = {i}>
                                            <td>{author.name}</td>
                                            <td><Link to={"/author/" + author._id + "/edit"}>Edit |</Link>
                                                <Link to={"/delete/" + author._id}>Delete</Link></td>
                                            </tr>
                                    )})}
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>

    )
}