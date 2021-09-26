import React, { Component } from 'react';

import { WebView } from 'react-native-webview';
import { StyleSheet, ActivityIndicator, View, Text, Dimensions,StatusBar} from 'react-native';
import { Header } from 'react-native-elements';
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Entypo';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';
export default class Webview extends Component {

  render() {
    const { params } = this.props.navigation.state;
    const main_link = params ? params.main_link : null;
    const ActivityIndicatorElement = () => {
      return (
        <ActivityIndicator
          color="black"
          size="large"
          style={styles.activityIndicatorStyle}
        />
      );
    };
    return (
   <View style={{height:height, width:width}}>
      <StatusBar
        
        backgroundColor="rgba(255,255,255,1)"
      
       />
  <Animatable.View animation="bounceInDown" useNativeDriver='true' delay={150} style={{backgroundColor: 'rgba(142,143,214,0.9)' }}>
        <View>

        <Header

backgroundColor= 'rgba(0,0,0,0.9)'
  leftComponent={ 
    <View > 
    
    <TouchableOpacity onPress={()=>{ this.props.navigation.dispatch(NavigationActions.back()) }} >
    
    <Icon name="cross" color="white" size={width*0.1}/>

    </TouchableOpacity>
    
    </View> }

/>

</View>
</Animatable.View>
  
    <WebView source={{ uri: main_link }} 
    
    
        
          renderLoading={ActivityIndicatorElement}
        
          startInLoadingState={true}
  
    />
 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});
