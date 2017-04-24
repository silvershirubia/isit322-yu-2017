import React from 'react';
import ReactDOM from 'react-dom';
import SmallNumbers from './components/SmallNumbers';
import { shallow } from 'enzyme';



describe('jest test', function() {

     const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };

    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };


    it('found nine before click', () => {
        const  wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 0</p>

        getFirst(wrapper);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message 9', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message 8', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.eight: 8</p>;
        wrapper.find('button.getEight').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 7', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.seven: 7</p>;
        wrapper.find('button.getSeven').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 6', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.six: 6</p>;
        wrapper.find('button.getSix').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 5', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.five: 5</p>;
        wrapper.find('button.getFive').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 4', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.four: 4</p>;
        wrapper.find('button.getFour').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 3', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.three: 3</p>;
        wrapper.find('button.getThree').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 2', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.two: 2</p>;
        wrapper.find('button.getTwo').simulate('click');
        expect(wrapper.contains(numSign)).toEqual(true);
    });

    it('renders button click message 1', () => {
        const wrapper = shallow(<SmallNumbers />);
        const numSign = <p className="App-intro">state.one: 1</p>;
        wrapper.find('button.getOne').simulate('click');
        getLast(wrapper);
        expect(wrapper.contains(numSign)).toEqual(true);
    });






});