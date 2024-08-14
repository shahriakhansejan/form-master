import React from 'react';
import PropTypes from 'prop-types';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

SimpleForm.propTypes = {
    
};

export default SimpleForm;