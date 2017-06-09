import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(true);

describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><ElfHeader /></Router>, div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = mount(<Router><ElfHeader /></Router>);

        const welcome = <h2>Welcome to React</h2>;
        elfDebug.getFirst(wrapper, 'h2');

        expect(wrapper.contains(welcome)).toEqual(true);
    });

});