import PropTypes from 'prop-types';
import Cousin from '../Cousin/Cousin';
import { useContext } from 'react';
import { MoneyContext } from '../../Grandpa/Grandpa';

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousin name={'Mausd'}></Cousin>
                <Cousin name={'Rokeya'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=> setMoney(money + 500)}>Add more</button>
        </div>
    );
};

Aunty.propTypes = {
    
};

export default Aunty;