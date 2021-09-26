import React, {Component} from "react";


import { View, Text, Image, ImageBackground, TextInput, Linking, StyleSheet, RefreshControl, Dimensions } from "react-native";

import * as Animatable from 'react-native-animatable';



const { width, height } = Dimensions.get('window');

class Header extends Component {
  render() {
    return (
      <Animatable.View animation="fadeIn" useNativeDriver='true' delay={100}>
        <View style={{ marginTop: height*0.045, justifyContent:'center' }}>
        {/* <Animatable.View animation="bounceInDown" delay='150'> */}
   
        <View style={{ marginHorizontal:width*0.048,justifyContent:'center' }}>
    
          <Text
            style={{
              fontSize: height*0.044,
              color: "white",
             
            }}
          >
            The Unbiased{'\n'}Newsroom.
          </Text>

          <Text
            style={{
              fontSize: height*0.016,
              paddingVertical: height*0.005,
              paddingRight: width*0.19,
              lineHeight: height*0.024,
             
              color: "white",
            }}
          >
            Minimalist, Informative and Unswayed.
          </Text>
    </View>
    {/* </Animatable.View> */}
          <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginHorizontal:width*0.048
  }}
/>

</View>
</Animatable.View>
    );
  }
}

export default Header;