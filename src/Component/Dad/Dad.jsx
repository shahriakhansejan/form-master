import PropTypes from 'prop-types';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sisther/Sister';

const Dad = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className='flex'>
            <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
            </section>
        </div>
    );
};

Dad.propTypes = {
    
};

export default Dad;