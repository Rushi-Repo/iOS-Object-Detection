
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import * as SplashScreen from 'expo-splash-screen';
import * as Animatable from 'react-native-animatable';
export default class App extends React.Component{

  render(){
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync,2000);
    return(

     
    <AppNavigator/>
 
  
    );
  }
}
