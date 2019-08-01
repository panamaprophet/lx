import React, {useRef, useState} from 'react';

import Menu from '../Menu';

import styles from './styles.css';

import {DEFAULT_ACTIVE_MENU_ITEM, DATA_URL} from './constants';
import {useOutsideClickEffect, useGetDataFromRestApiEffect} from './hooks';

const App = () => {
    const ref = useRef(null);
    const [activeItemId, setActiveItemId] = useState(DEFAULT_ACTIVE_MENU_ITEM);
    const [menuItems, setMenuItems] = useState([]);

    useGetDataFromRestApiEffect(DATA_URL, setMenuItems);
    useOutsideClickEffect(ref, setActiveItemId);

    const toggleActiveItemId = id => 
        setActiveItemId(activeItemId === id ? DEFAULT_ACTIVE_MENU_ITEM : id);

    return (
        <div ref={ref} className={styles.root}>
            <Menu
                items={menuItems}
                activeItemId={activeItemId}
                onClick={toggleActiveItemId}
            />
        </div>
    );
};

export default App;