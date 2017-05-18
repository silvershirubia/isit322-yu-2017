import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import {mount} from 'enzyme';
import ElfDebug from '../ElfDebug';

const elfDebug = new ElfDebug(true);

describe('My Get User Info Test', function() {

    elfDebug.getIndex(mount(<DataMaven />), 1, true);

    function getDefault(id, value) {
        const wrapper = mount(<DataMaven />);
        const nineSign = <p className="ElfFormParagraph" id={id}>{value}</p>;
        elfDebug.getIndex(wrapper, 1, true);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    }

    function simClick(id, value, button) {
        const wrapper = mount(<DataMaven />);
        const nineSign = <p className="ElfFormParagraph" id={id}>{value}</p>;

        wrapper.find('button.getUser').simulate('click');
        elfDebug.getFirst(wrapper, 'p');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    }

    it('My Get User Info Test', () => {
        const wrapper = mount(<DataMaven />);
        const nineSign = <p className="ElfFormParagraph">Silvia</p>;

        wrapper.find('button.getUser').simulate('click');
        elfDebug.getFirst(wrapper, 'p');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

    it('renders default login data', () => {
        getDefault('login', 'login-unknown');

    });

    it('renders click login data', () => {
        simClick('login', 'Silvia', 'getUser');

    });

    it('renders default avatar url data', () => {
        getDefault('avatar_url', 'aiunknown');

    });

    it('renders click avatar url data', () => {
        simClick('avatar_url', null, 'getUser');

    });

    it('renders default  url data', () => {
        getDefault('url', 'urlunknown');

    });

    it('renders click  url data', () => {
        simClick('url', null, 'getUser');

    });

    it('renders default html url data', () => {
        getDefault('html_url', 'htmlUrlunknown');

    });

    it('renders click  html url data', () => {
        simClick('html_url', null, 'getUser');

    });

    it('renders default followers url data', () => {
        getDefault('followers_url', 'followersUrlunknown');

    });

    it('renders click  followers url data', () => {
        simClick('followers_url', null, 'getUser');

    });

    //gist


});