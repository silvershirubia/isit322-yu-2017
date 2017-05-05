import React from 'react';
import ReactDOM from 'react-dom';
import GetUserInfo from '../components/GetUserInfo';
import { mount } from 'enzyme';
import ElfDebug from '../ElfDebug';

const elfDebug = new ElfDebug(true);

describe('My Get User Info Test', function() {

    const showData = true;

    function  getDefault(id, value) {
        it('renders default login data', () => {
            const wrapper = mount(<GetUserInfo />);
            const nineSign = <p className="ElfFormParagraph" id={id}>{value}</p>;

            elfDebug.getIndex(wrapper, 1, true);
            expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
        });
    }


    it('My Get User Info Test', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph">Silvia</p>;

        wrapper.find('button.getUser').simulate('click');
        elfDebug.getFirst(wrapper, 'p');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

    it('renders default login data', () => {
        getDefault('login', 'login-unknown');

    });

});