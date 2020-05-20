import React, {useState, setState} from 'react';
import axios from 'axios';

const AuthorForm = props => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        // console.log(name);
        onSubmitProp(name);
    }

    return(
        <div>
            <form onSubmit= {onSubmitHandler}>
                <div className="form-group">
                    <lable htmlFor="name">Name: </lable>
                    <input type="string" value= {name} name="name" onChange = {(e) => setName(e.target.value)}/>
                </div>
                <div className ="form-group">
                    <input className="btn btn-primary" type="submit"/>
                </div>
            </form>
        </div>
    )
}
export default AuthorForm;