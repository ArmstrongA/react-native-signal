import React from 'react';
import { StyleSheet, Text, View, StatusBar, KeyboardAvoidingView, BackAndroid } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';

import CurrentOrder from '../navigator/CurrentOrder';
import OldOrder from '../navigator/OldOrder';
import Account from '../navigator/Account';

import Navigator from '../pages/Navigator';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            loading: false,
            access_token : navigation.getParam('access_token', 'access_token'),
            user_number: null,
        };
    }  

    render() {
        return (
        <View style={styles.container}>
        <StatusBar
            backgroundColor="#455a64"
            barStyle="light-content"
          />
            <Navigator access_token = {this.state.access_token}/>
        </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#455a64',
    },
  });
  