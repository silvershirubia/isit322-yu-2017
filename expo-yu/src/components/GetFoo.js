/**
 * Created by bcuser on 4/24/17.
 */

import React, {Component} from 'react';

import {connect} from 'react-redux';

import  {StyleSheet, Button, Text, View} from 'react-native';

class GetFoo extends Component {

    constructor() {
        super();//always call first
        this.state = {
            foo: 'start foo',
            file: 'file start'
        };

    }

    render() {
        return (
            <View if="GetFoo">

                <Text>
                    state.foo: {this.props.foo}
                </Text>
                <Text >
                    state.file: {this.props.file}
                </Text>

                <Button id="getFoo" title="Get Foo" onPress={this.props.getFoo}/>

            </View>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        foo: state.getFoo.foo,
        file: state.getFoo.file
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFoo: () => {
            fetch('/foo')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'GETFOO',
                    getFoo: json
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};


GetFoo = connect(mapStateToProps, mapDispatchToProps)(GetFoo);

export default GetFoo;