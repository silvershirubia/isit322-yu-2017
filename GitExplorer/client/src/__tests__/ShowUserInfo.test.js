import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import { shallow } from 'enzyme';
import fieldDefinitions from '../field-definitions';
import elfDebug from '../ElfDebug';

describe('My Get User Info Test', function() {

    let showData = true;
    let gitUser = {};

    beforeEach(function () {
       gitUser= {
           login: 'login'
       }

    });

    let getFirst = function (wrapper, element) {
        const paraData = wrapper.find(element).element.debug();
        console.log(paraData);
    };


    it('renders default login data', () => {
        const wrapper = shallow(<ShowUserInfo gitUser={gitUser}
                                              fields={fieldDefinitions}
                                              onChange={function(){}} />);
        const nineSign = <label className="ElfFormLabel">
            login
        </label>;

        elfDebug(showData).getFirst(wrapper, 'div');

        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

});