import React from 'react';
import PropTypes from 'prop-types';
import Special from '../Special/Special';

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section>
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

Myself.propTypes = {
    
};

export default Myself;