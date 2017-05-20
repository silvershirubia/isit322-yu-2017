/**
 * Created by bcuser on 5/16/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import GistLister from '../components/GistLister';

import {shallow} from 'enzyme';
import ElfDebug from '../ElfDebug';

const elfDebug = new ElfDebug(true, 'GistLister.test.js');

describe('ElfHeader Suite', function () {
    let gistList = {};

    beforeEach(function() {
        gistList = [{
            url: '',
            html_url: ''
        }];

    });

    it('renders the GistLister component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GistLister
            gistList={gistList}
            fetchGistList={function() {}} />, div);
    });

    it('renders and reads GistLister H2 text', () => {
        const wrapper = shallow(<GistLister gistList={gistList}
                                            fetchGistList={function() {}}/>);
        elfDebug.getFirst(wrapper, 'h2');
        const welcome = <h2>Gist Lister</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders GistLister UL Element', () => {
        const wrapper = shallow(<GistLister gistList={gistList}
                                            fetchGistList={function() {}}/>);
        elfDebug.getAll(wrapper,'ul');
        //var a = wrapper.find('ul');
        //console.log(a.length);
        expect(wrapper.find('ul').length).toEqual(6);
    });

});