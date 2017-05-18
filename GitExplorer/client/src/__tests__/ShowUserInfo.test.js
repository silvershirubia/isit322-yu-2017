import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import {mount} from 'enzyme';
import fieldDefinitions from '../field-definitions';
import ElfDebug from '../ElfDebug';

const elfDebug = new ElfDebug(true);

describe('Show User Info Test', function() {

    let showData = true;
    let gitUser = {};

    beforeEach(function() {
        gitUser = {
            login: 'login',
            username: 'avatar'
        };

    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShowUserInfo
            fields={fieldDefinitions}
            gitUser={gitUser}
            onChange={function() {
            }}
        />, div);
    });

    it('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo gitUser={gitUser}
                                            fields={fieldDefinitions}
                                            onChange={function() {
                                            }}/>);

        const nineSign = <p className="ElfFormParagraph" id="login">login</p>;

        elfDebug.getFirst(wrapper, 'div');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

    function getDefault() {
        const wrapper = mount(<ShowUserInfo gitUser={gitUser}
                                            fields={fieldDefinitions}
                                            onChange={function() {
                                            }}/>);

        const nineSign = <p className="ElfFormParagraph" id="login">login</p>;

        elfDebug.getFirst(wrapper, 'div');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    }

    it('renders default test data', () => {
        getDefault();
    });

});