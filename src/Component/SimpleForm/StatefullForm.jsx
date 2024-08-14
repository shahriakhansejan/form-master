import PropTypes from 'prop-types';
import { useState } from 'react';

const StatefullForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('');
            console.log(name, email, password);
        }
    }

    
    const handleNameChange = e =>{
        setName(e.target.value)
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange} type="text" name="name" id="" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input
                onChange={handlePasswordChange} type="password" name="password" required id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
                {
                    error && <p>{error}</p>
                }
        </div>
    );
};

StatefullForm.propTypes = {

};

export default StatefullForm;