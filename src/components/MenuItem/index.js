import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './styles.css';

const MenuItem = ({
    id,
    name,
    items,
    isActive = false,
    onClick = () => {},
    SubMenuComponent,
}) => (
    <li className={cx(styles.root, {
        [styles.isActive]: isActive,
    })}>
        <div className={styles.title} onClick={() => onClick(id)}>
            {name}
        </div>
        {isActive && items && SubMenuComponent && <SubMenuComponent items={items} />}
    </li>
);

export default MenuItem;

MenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    SubMenuComponent: PropTypes.elementType,
};