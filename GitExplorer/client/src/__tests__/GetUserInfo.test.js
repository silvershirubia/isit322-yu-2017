import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import { shallow } from 'enzyme';

describe('My Get User Info Test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });

    var quiet = false;

    function getFirst(wrapper, element) {
        const eightp = wrapper.find(element).first().debug();
        if (!quiet) {
            console.log("GetUserInfo:", eightp);
        }
    }


    it('renders default login data', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">
            Log In Name:
            <input value=""/>
        </p>;

        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

    it.only('My Get User Info Test', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">Log In Name: <input value='silvia'/></p>;

        wrapper.find('button#getUser').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });


});