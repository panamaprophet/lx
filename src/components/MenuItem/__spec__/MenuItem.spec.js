import React from 'react';
import {shallow} from 'enzyme';

import MenuItem from '../index';
import {linear, withSubtree} from './mock';

describe('Menu Item', () => {
    test('component renders with one-level menu', () => {
        const component = shallow(<MenuItem 
            {...linear} 
        />);

        expect(component).toMatchSnapshot();
    });

    test('component renders with active submenu', () => {
        const component = shallow(<MenuItem 
            {...withSubtree} 
        />);

        expect(component).toMatchSnapshot();
    });

    test('component triggers onClick by click', () => {
        const onClick = jest.fn();

        const component = shallow(<MenuItem 
            onClick={onClick}
        />)

        component.find('div').simulate('click');

        expect(onClick).toBeCalled();
    });
});