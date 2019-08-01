import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

import App from '../index';

describe('App', () => {
    test('component renders with default props', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});