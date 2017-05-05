import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import { shallow } from 'enzyme';
import fieldDefinitions from '../field-definitions';
import ElfDebug from '../ElfDebug';

const elfDebug = new ElfDebug(true);

describe('Show User Info Test', function() {

    let showData = true;
    let gitUser = {};

    beforeEach(function () {
       gitUser= {
           login: 'login'
       }

    });

    it('renders default login data', () => {
        const wrapper = shallow(<ShowUserInfo gitUser={gitUser}
                                              fields={fieldDefinitions}
                                              onChange={function(){}} />);

        const nineSign = <label className="ElfFormLabel" id="login">
            loginName
            :
        </label>;

        elfDebug.getFirst(wrapper, 'div');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

});