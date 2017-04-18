import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import { shallow } from 'enzyme';



describe('jest test', function() {

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

});