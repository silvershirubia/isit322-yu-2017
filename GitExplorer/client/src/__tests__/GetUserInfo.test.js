import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import { mount } from 'enzyme';
import elfDebug from '../ElfDebug';

const elfDebug = new elfDebug(true);

describe('My Get User Info Test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetUserInfo />, div);
    });

    const showData = true;


    it('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">
 Login: login
 </p>;

        elfDebug(showData).getFirst(wrapper, 'p');

        expect(wrapper.contains(nineSign)).toEqual(true);

    });

    it.only('My Get User Info Test', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">
            Login: Silvia
        </p>;

        wrapper.find('button.getUser').simulate('click');
        elfDebug(showData).getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

});