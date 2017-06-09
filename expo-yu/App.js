import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import gistReducer from './src/assets/gist-reducer';
import SmallNumbers from './src/components/SmallNumbers';
import GetFoo from './src/components/GetFoo';

let store = createStore(gistReducer);

export default class App extends React.Component {

    showBar() {
        Alert.alert('bar');
    }

    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <SmallNumbers/>
                    <GetFoo/>
                    <Text>Isit322!</Text>

                    <Button
                        title="Foo"
                        onPress={this.showBar}
                    />

                </View>
            </Provider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
