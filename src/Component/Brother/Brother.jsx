import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MoneyContext } from '../../Grandpa/Grandpa';

const Brother = () => {
    const [money] = useContext(MoneyContext);
    return (
        <div>
            <h2>Brother</h2>
            <p>Another field: {money}</p>
        </div>
    );
};

Brother.propTypes = {
    
};

export default Brother;