import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import ListCard from "./ListCard";




const PROFILE_IMAGE_MAX_HEIGHT = 60
const PROFILE_IMAGE_MIN_HEIGHT = 60
const HEADER_MAX_HEIGHT = 300
const HEADER_MIN_HEIGHT = 100

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


class Header_animate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp'
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp'
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5
      ],
      extrapolate: 'clamp'
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 300],
      outputRange: [0, 0, 1000],
      extrapolate: 'clamp'
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26
      ],
      outputRange: [-20, -20, -20, 0],
      extrapolate: 'clamp'
    });

    return (
      <ImageBackground
      source={require("../images/back.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1 }}>
           <View>
       
        </View>

        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            height: headerHeight,
            zIndex: headerZindex,
            elevation: headerZindex, //required for android
         
            justifyContent:'left' 
          }}
        > 
          <Animated.View
            style={{ position: 'absolute', bottom: headerTitleBottom,}}
          >
             
            <Animated.View>
            <View style={{ paddingHorizontal: 20, marginTop: 60, justifyContent:'left', marginBottom:50 }}>
            <Text
            style={{
              fontSize: 40,
              color: "#522289",
              fontFamily: "RobotoBold",
            }}
          >
            Articles for You.
          </Text>

          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
            
              lineHeight: 22,
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
            }}
          >
            Handpicked and Solicited articles based on your preferences.
          </Text>
          
          </View>
            </Animated.View>
            <View>

          <Text>Hello</Text>
        
            </View>


           
          </Animated.View>
        </Animated.View>

        <ScrollView
          style={{ flex: 1, }}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >  
        
          <View style={{ height: 1000 }}>

        
     

        </View>


       
       
        </ScrollView>
   
      </View>
      </ImageBackground>
    );
  }
}
export default Header_animate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer_back: {
    backgroundColor:'steelblue',
   },
   image_main: {  
 
    width:380,
    alignSelf:'center',
    height:143,
    marginBottom:10,
    marginTop:10,
    borderRadius:10
  
  },
  footer_text: {
    color: 'white',
  },  
   title: {
   
    fontFamily: 'monospace',
    fontSize: 32,
    color: 'white',
    marginBottom: 40,
    marginTop: 40,
    alignSelf: 'center',
    fontStyle:'normal'
  },
});