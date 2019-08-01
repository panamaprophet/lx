import {useEffect} from 'react';

import {DEFAULT_ACTIVE_MENU_ITEM} from './constants';

/**
 * normalize data for some consistency between items and subitems
 */
const normalizeData = data => data.map(item => {
    const {subItems, ...rest} = item;

    return {
        ...rest, 
        items: subItems,
    };
});

export const useOutsideClickEffect = 
    (ref, callback) => {
        const onClickOutside = event => 
            ref.current && 
            ref.current.contains(event.target) === false && 
            callback(DEFAULT_ACTIVE_MENU_ITEM);

        useEffect(() => {
            document.addEventListener('click', onClickOutside);

            return () => { 
                document.removeEventListener('click', onClickOutside); 
            }
        });
    };

export const useGetDataFromRestApiEffect = 
    (url, setData) => useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(normalizeData)
            .then(data => setData(data))
            .catch(error => console.log(error));
    });
