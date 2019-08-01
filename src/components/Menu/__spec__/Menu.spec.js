import React from 'react';
import {shallow} from 'enzyme';

import Menu from '../index';
import itemsMock from './mock';

describe('Menu', () => {
    test('component renders with default props', () => {
        const component = shallow(<Menu />);

        expect(component).toMatchSnapshot();
    });

    test('component renders with fixed position by default', () => {
        const component = shallow(<Menu items={itemsMock} />);
        const hasClass = component.hasClass('position_type_fixed');

        expect(hasClass).toBe(true);
    });

    test('component renders with specified position', () => {
        const component = shallow(<Menu 
            items={itemsMock}
            position="absolute"
        />);

        const hasClass = component.hasClass('position_type_absolute');

        expect(hasClass).toBe(true);
    });

    test('all passed classNames applied to component', () => {
        const expectedClassNames = ['additional', 'classnames'];

        const component = shallow(<Menu 
            classNames={expectedClassNames}
        />);

        const hasClass = expectedClassNames
            .reduce((result, className) => 
                result && component.hasClass(className), true);

        expect(hasClass).toBe(true);
    })
});