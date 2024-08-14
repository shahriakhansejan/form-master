import PropTypes from 'prop-types';
import useInputState from '../Hooks/useInputState';

const HookForm = () => {
    const emailState = useInputState('HookName')
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(emailState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" id="" />
                <br /> */}
                <input {...emailState} placeholder='Enter Your Email Address' type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

HookForm.propTypes = {
    
};

export default HookForm;