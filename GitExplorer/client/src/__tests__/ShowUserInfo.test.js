import React from 'react';
import ReactDOM from 'react-dom';
import ShowUserInfo from '../components/ShowUserInfo';
import { shallow } from 'enzyme';

describe('My Get User Info Test', function() {

    let quiet = false;
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


    fit('renders default login data', () => {
        const wrapper = shallow(<ShowUserInfo gitUser={gitUser}
                                              onChange={function(){}} />);
        const nineSign = <p className="App-intro">
            Login:
            login
        </p>;

        //getFirst(wrapper, 'div');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

});