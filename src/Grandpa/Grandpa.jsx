import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Dad from '../Component/Dad/Dad';
import Uncle from '../Component/Uncle/Uncle';
import Aunty from '../Component/Aunty/Aunty';
import './Grandpa.css';

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'Diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="gold">
                <section className='flex'>
                    <Dad asset={asset}></Dad>
                    <Uncle asset={asset}></Uncle>
                    <Aunty></Aunty>
                </section>

            </AssetContext.Provider>

            </MoneyContext.Provider>
        </div>
    );
};

Grandpa.propTypes = {

};

export default Grandpa;