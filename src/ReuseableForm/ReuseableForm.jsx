import PropTypes from 'prop-types';

const ReuseableForm = ({formTitle,handleSubmit, submitButtonText = 'Submit', children}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div>
            {children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input placeholder='Enter Your Email Address' type="email" name="email" id="" />
                <br />
                <input type="password" name="password" required id="" />
                <br />
                <input type="submit" value= {submitButtonText} />
            </form>
        </div>
    );
};

ReuseableForm.propTypes = {
    
};

export default ReuseableForm;