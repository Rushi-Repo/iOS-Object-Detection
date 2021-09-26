import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions,TextInput, ImageBackground, SafeAreaView, Modal,TouchableHighlight,ScrollView, StatusBar } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State, TouchableOpacity } from 'react-native-gesture-handler';


import Header from '../components/Header'
import { Container,Content, Footer, FooterTab, Fab, Button} from 'native-base';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');



const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 500,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock)
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position
  ]);
}
class Login1 extends React.Component {

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }
 state = {
  modalVisible: false,
}

  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = event([
      {
        nativeEvent: ({ state }) =>
          block([
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);


    
    this.onCloseState = event([
        {
          nativeEvent: ({ state }) =>
            block([
              cond(
                eq(state, State.END),
                set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
              )
            ])
        }
      ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 3, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.textinputZindex = interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, -1],
        extrapolate: Extrapolate.CLAMP
      });

      this.textinputY = interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [0, 100],
        extrapolate: Extrapolate.CLAMP
      });

      this.textinputOpacity = interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP
      });

      this.rotateCross = interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [180, 360],
        extrapolate: Extrapolate.CLAMP
      });

   
  }

  


  render() {
   
    return (
      <Animatable.View animation="fadeIn" delay={2000}>
        <ImageBackground
        
        style={{ width: "100%", height: "100%",backgroundColor:'black' }}
      >
     
     
    <ScrollView>
     
    
         
        <View style={{marginBottom:height*0.50}}>
        {/* <Image 
    source={ require("../../assets/icon.png")}
    style={{ width: width*0.36, height: height*0.16, marginTop:height*0.1,alignSelf: 'center' }}
  /> */}
  <Animatable.View animation="bounceInDown" useNativeDriver='true' delay={2000}>
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



<Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }
               presentationStyle={'overFullScreen'}
               backButtonClose={true}
               >
              

               <View style = {styles.modal}>
               <ImageBackground
      
        style={{ width: "100%", height: "100%" ,backgroundColor:'black'}}
        blurRadius={5}
      >
          <ScrollView>
                    <View style={{ marginTop: height*0.020, justifyContent:'center' }}>
                    <Animatable.View animation='fadeIn' delay={200}>   
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
              paddingVertical: height*0.011,
              paddingRight: width*0.019,
              lineHeight: height*0.024,
           
              color: "white",
            }}
          >
            Minimalist, Informative and Unswayed.
          </Text>
    </View>
    <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginHorizontal:20
  }}
></View>

</Animatable.View>
<Animatable.View animation='fadeIn' delay={400}>
<TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}
                     style = {styles.text}
                     >

                     
                     <Text>Let's get started!</Text>
                  </TouchableHighlight>
                  </Animatable.View>
                  <Animatable.View animation='fadeIn' delay={600}>     

         
<Text style={{ margin: width*0.048, fontSize: width*0.048, textAlign: 'left', color: "white",
            
  }}>The slider lets you choose your news diet the way you aim to choose your food: deliberately rather than impulsively.{'\n'}{'\n'}

What spin do you want? The slider lets you choose the political stance of your news sources. It classifies media outlets based on how close they are to power. The model analyzes the news sources that normally accept or challenge claims by powerful entities such as the government and large corporations. {'\n'}{'\n'}Rather than leaving them alone, you’ll probably enjoy spicing things up by occasionally sliding toward them to see what those you disagree with are writing.</Text>
</Animatable.View>
    </View>
    
    </ScrollView>
                  </ImageBackground>
                  </View>
                 
            
                  </Modal>
                  
  </View>
 
 
     
  


        <View style={{ justifyContent: 'center' }}>
        <Animatable.View animation='zoomInUp' delay={2000}>
     
        <View style={{backgroundColor: 'rgba(128,128,128,0.5)',marginTop:height*0.0111,marginBottom:height*0.0111,marginHorizontal:height*0.0111,borderTopLeftRadius:height*0.033,borderBottomRightRadius:height*0.033}}>
        {/* <Animatable.View animation='zoomInDown' delay='450'>  */}
        <Animatable.View animation='fadeIn' delay={2500}>
        <TouchableOpacity onPress onPress={ () =>
          this.props.navigation.navigate('Feedback')} style={styles.button_pop_feedback}>
                <Text style={{fontSize:height*0.022,color:'black'}}>Contact Us</Text>
                </TouchableOpacity>
                </Animatable.View>
                <Animatable.View animation='fadeIn' delay={2600}>
        <TouchableHighlight 
                  style = {styles.button_pop}
                  onPress = {() => {this.toggleModal(true)}}>
               <Text style={{fontSize: height*0.022,color:'black'}}>Our Mission Statement</Text>
            </TouchableHighlight>
            </Animatable.View>
            {/* </Animatable.View> */}
         
          {/* <Animatable.View animation='zoomInDown' delay='300'> */}
          <Animatable.View animation='fadeIn' delay={2700}>
                <TouchableOpacity onPress onPress={ () =>
          this.props.navigation.navigate('Home')} style={styles.button_pop}>
                <Text style={{fontSize:height*0.022,color:'black'}}>Sign-in as Guest</Text>
                </TouchableOpacity>
                </Animatable.View>
                {/* </Animatable.View> */}
                </View>
          </Animatable.View>
      </View>
      </ScrollView>
    
      {/* <View style={{marginBottom:-20}}>
      <Footer style={{backgroundColor:'#0000000'}}>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
        </View> */}
      </ImageBackground>
      </Animatable.View>
    );
  }
}
export default Login1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: height*0.0781,
    marginHorizontal: width*0.048,
    borderRadius: width*0.0845,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height*.0055,
    shadowOffset: {width:width*0.0048,height:height*0.0022},
    shadowColor: 'black',
    shadowOpacity: 0.2

  },
  button_pop: {
    backgroundColor: 'white',
    height: height*0.055,
    marginHorizontal: width*0.048,
    borderRadius: width*0.0845,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height*0.0111,
    
    shadowOffset: {width:width*0.0048,height:height*0.0022},
    shadowColor: 'black',
    shadowOpacity: 0.2

  },

  button_pop_feedback: {
    backgroundColor: 'white',
    height: height*0.055,
    width:width*0.48,
    marginHorizontal: width*0.048,
    borderRadius: width*0.0845,
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    marginVertical: height*0.0111,
   
    shadowOffset: {width:width*0.0048,height:height*0.0022},
    shadowColor: 'black',
    shadowOpacity: 0.2

  },

  closeButton:{
    height:height*0.044,
    width:width*0.096,
    backgroundColor: 'white',
    borderRadius:width*0.048,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top: -width*0.048,
    
   
    shadowOffset: {width:width*0.0048,height:height*0.0022},
    shadowColor:'black',
    shadowOpacity:0.2,
  },

  textinput:{
    height:height*0.055,
    borderRadius:25,
    borderWidth:0.5,
    marginHorizontal:20,
    paddingLeft:10,
    marginVertical:5,
    borderColor:'white', 
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ede3f2',
    padding: width*0.0241
 },
 modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    

 },
 text: {
  backgroundColor: 'white',
  height: height*0.0781,
  marginHorizontal: width*0.048,
  borderRadius: width*0.084,
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: height*.0055,
  shadowOffset: {width:width*0.0048,height:height*0.0022},
  shadowColor: 'black',
  shadowOpacity: 0.2,
  marginTop:height*0.033,
 }
});