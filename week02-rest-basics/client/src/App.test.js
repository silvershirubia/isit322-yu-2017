import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { shallow } from 'enzyme';

describe('jest test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">state.foo: bar</p>;
        wrapper.find('button.getFoo').simulate('click');
        const nineP = wrapper.find('p').first().debug();
        console.log(nineP);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

});