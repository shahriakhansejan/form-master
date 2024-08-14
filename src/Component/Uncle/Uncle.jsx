import PropTypes from 'prop-types';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={'Rafsan'} asset={asset} ></Cousin>
                <Cousin name={'Sohana'}></Cousin>
            </section>
        </div>
    );
};

Uncle.propTypes = {
    
};

export default Uncle;