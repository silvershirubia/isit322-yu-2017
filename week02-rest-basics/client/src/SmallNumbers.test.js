import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers from './components/SmallNumbers';
import { shallow } from 'enzyme';



describe('jest test', function() {

    it('found', () => {
        const  wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 0</p>
        const nineP = wrapper.find('p').last().debug();
        //console.log(nineP);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        const nineP = wrapper.find('p').last().debug();
        //console.log(nineP);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});