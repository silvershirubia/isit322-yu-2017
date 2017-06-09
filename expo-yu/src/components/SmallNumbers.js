import React, {Component} from 'react';

import {connect} from 'react-redux';
import  {Alert, Button, Text, View, StyleSheet} from 'react-native';

class SmallNumbers extends Component {
    constructor(props) {
        super(props);//always call first

        this.getNine = this.getNine.bind(this);
        this.getEight = this.getEight.bind(this);
    }

    getNine = () => {
        this.props.dispatch({type: 'NUMBER_NINE'});
    };

    getEight = () => {
        this.props.dispatch({type: 'NUMBER_EIGHT'});
    };

    getSeven = () => {
        this.props.dispatch({type: 'NUMBER_SEVEN'});
    };

    getSix = () => {
        this.props.dispatch({type: 'NUMBER_SIX'});
    };

    getFive = () => {
        this.props.dispatch({type: 'NUMBER_FIVE'});
    };

    getFour = () => {
        this.props.dispatch({type: 'NUMBER_FOUR'});
    };

    getThree = () => {
        this.props.dispatch({type: 'NUMBER_THREE'});
    };

    getTwo = () => {
        this.props.dispatch({type: 'NUMBER_TWO'});
    };

    getOne = () => {
        this.props.dispatch({type: 'NUMBER_ONE'});
    };

    render() {
        return (
            <View id="smallNumbers">
                <Text style={styles.appLogo}>
                    state.nine: {this.props.numbers.nine}
                </Text>
                <Text >
                    state.eight: {this.props.numbers.eight}
                </Text>
                <Text >
                    state.seven: {this.props.numbers.seven}
                </Text>
                <Text >
                    state.six: {this.props.numbers.six}
                </Text>
                <Text >
                    state.five: {this.props.numbers.five}
                </Text>
                <Text >
                    state.four: {this.props.numbers.four}
                </Text>
                <Text >
                    state.three: {this.props.numbers.three}
                </Text>
                <Text >
                    state.two: {this.props.numbers.two}
                </Text>
                <Text >
                    state.one: {this.props.numbers.one}
                </Text>

                <Button id='getNine' title="Get Nine" onPress={this.getNine}/>
                <Button id='getEight' title="Get Eight" onPress={this.getEight}/>
                <Button id='getSeven' title="Get Seven" onPress={this.getSeven}/>
                <Button id='getSix' title="Get Six" onPress={this.getSix}/>
                <Button id='getFive' title="Get Five" onPress={this.getFive}/>
                <Button id='getFour' title="Get Four" onPress={this.getFour}/>
                <Button id='getThree' title ="Get Three" onPress={this.getThree}/>
                <Button id='getTwo' title="Get Two" onPress={this.getTwo}/>
                <Button id='getOne' title="Get One" onPress={this.getOne}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appLogo: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers
    };
};

SmallNumbers = connect(mapStateToProps)(SmallNumbers);

export default SmallNumbers;
