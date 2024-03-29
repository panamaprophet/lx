import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import MenuItem from '../MenuItem';

import styles from './styles.css';


const Menu = ({
    items,
    activeItemId,
    onClick = () => {},
    classNames = [],
    position = 'fixed'
}) => (
    <ul className={cx([
        styles.root,
        styles[`position_type_${position}`],
        ...classNames
    ])}>
        {items && items.map(item => (
            <MenuItem
                {...item}
                isActive={activeItemId === item.id}
                SubMenuComponent={Menu}
                onClick={onClick}
                key={item.id}
            />))}
    </ul>
);

export default Menu;

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    activeItemId: PropTypes.number,
    onClick: PropTypes.func,
    classNames: PropTypes.arrayOf(PropTypes.string),
    position: PropTypes.string,
};