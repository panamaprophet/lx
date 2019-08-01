import React from 'react';
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
