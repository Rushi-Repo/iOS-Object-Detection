import React, {Component,useEffect} from "react";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground, TextInput, Linking, StyleSheet, RefreshControl, Dimensions,Animated,Button,Easing,StatusBar} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slider';

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CardNine from 'react-native-card-ui'
import { FAB } from 'react-native-elements';
import Header from '../components/Header'
import * as Animatable from 'react-native-animatable';
const { width, height } = Dimensions.get('window');





export default class Home extends Component {



  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      value: 50,
    fadeAnim: new Animated.Value(0),
    active: false
    };
  }

  fadeInProps = () => {
 
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1500,
      
    }).start();
  };

redirect_left = () =>{

    if(this.state.value == 0 )
    {   
  
        
        this.props.navigation.navigate("LeftWingScreen")
    }



    if(this.state.value == 25 )
    {   
  
        
        this.props.navigation.navigate("CenterLeft")
    }

    if(this.state.value == 50 )
    {   
  
        
        this.props.navigation.navigate("Neutral")
    }

  
  }
  redirect_right = () =>{


    if(this.state.value == 100 )
    {   
  
        
        this.props.navigation.navigate("RightWingScreen")
    }
    
    if(this.state.value == 75 )
    {   
  
        
        this.props.navigation.navigate("CenterRight")
    }

    if(this.state.value == 50 )
    {   
  
        
        this.props.navigation.navigate("Neutral")
        
    }
  
  }

  
  render() {

 
    return (
     
        
      <ImageBackground
        
        style={{ width: "100%", height: "100%",backgroundColor:'black' }}
      >
        <View style={{justifyContent:'center' }}>
      
        {/* <Animated.View style={[
 
 {
   
   opacity: this.state.fadeAnim
 }
]}> */}
        
<Header /> 



              <ScrollView >
         
                <View style={{backgroundColor: 'rgba(128,128,128,0.3)',marginTop:height*0.0111,marginBottom:height*0.0111,marginLeft:width*0.024,borderTopLeftRadius:height*0.033,borderBottomLeftRadius:height*0.033}}>
                <Animatable.View animation="fadeIn" useNativeDriver='true' delay={200}> 
                  <View>
                <Text
            style={{
              fontSize: height*0.027,
   
              color: "white",
              
              marginTop:height*0.022,
              marginLeft:width*0.048

            }}
          >
          Quick Links,</Text>
          </View>
           
         
          <ScrollView
          
            horizontal
            showsHorizontalScrollIndicator={false}
            
            style={{  marginTop: height*0.011,padding:width*0.024 }}
           
          >

            <TouchableOpacity
              style={styles.QuickLinks}
              onPress={() => Linking.openURL("https://www.unifrog.org/know-how/understanding-the-political-spectrum")}
             
            >
              <Image
                source={require('../images/both.jpg')}
                style={styles.QuickLinksImage}
                
              />
              <View
                style={{
                  flexDirection: "row",
                  width: width*0.362,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: width*0.010,
                    paddingVertical: height*0.0055,
                  }}
                >
                  <Text
                   style={styles.QuickLinksText}
                  >
                    Origins of Left/Right Wings.
                  </Text>
                </View>
               
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.QuickLinks}
              onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Left-wing_politics#:~:text=Left%2Dwing%20politics%20typically%20involves,to%20be%20reduced%20or%20abolished.")}
            >
              <Image
                source={require('../images/manipulate.jpg')}
                style={styles.QuickLinksImage}
                
              />
              <View
                style={{
                  flexDirection: "row",
                  width: width*0.362,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: width*0.010,
                    paddingVertical: height*0.0055,
                  }}
                >
                  <Text
                   style={styles.QuickLinksText}
                  >
                    Learn more about the left wing.
                  </Text>
                </View>
                
              </View>
            </TouchableOpacity> 

             <TouchableOpacity
              style={styles.QuickLinks}
              onPress={() => Linking.openURL("https://en.wikipedia.org/wiki/Right-wing_politics")}
            >
              <Image
                source={require('../images/left.jpg')}
                style={styles.QuickLinksImage}
                
              />
              <View
                style={{
                  flexDirection: "row",
                  width: width*0.362,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: width*0.010,
                    paddingVertical: height*0.0055,
                  }}
                >
                  <Text
                   style={styles.QuickLinksText}
                  >
                    Learn more about the right wing.
                  </Text>
                </View>
                
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.QuickLinks}
              onPress={() => Linking.openURL("https://www.politicalcompass.org/")}
            >
              <Image
                source={require('../images/test_app.jpg')}
                style={styles.QuickLinksImage}
                
              />
              <View
                style={{
                  flexDirection: "row",
                  width: width*0.362,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: width*0.010,
                    paddingVertical: height*0.0055,
                  }}
                >
                  <Text
                    style={styles.QuickLinksText}
                  >
                    Tool to test your orientation.
                  </Text>
                </View>
                
              </View>
            </TouchableOpacity>


          </ScrollView>
          </Animatable.View>
          </View>
          <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,

    marginHorizontal:width*0.048
  }}
/>        
          <View style={{paddingHorizontal:width*0.048,backgroundColor: 'rgba(128,128,128,0.3)',marginHorizontal:width*0.024,borderTopLeftRadius:height*0.033,borderBottomRightRadius:height*0.033,marginTop:height*0.0111,marginBottom:height*0.0111}}>
       
          <Animatable.View animation="fadeIn" delay={450}>
         
                  <Text
            style={{
              color: "white",
          
            fontSize: height*0.0279,
            marginTop:height*0.022,
           
            }}
          >
          Choose your news diet,</Text>
         
          <View style={{alignItems:'center', marginTop:height*0.0111}}>

<Slider 
onValueChange={(value) => this.setState({value})}
maximumValue = '100'
value={this.state.value}
step='25'
minimumTrackTintColor='#f5aa42'
maximumTrackTintColor='steelblue'
thumbTintColor="white"
style={{width:width*0.70}}
onSlidingComplete = {() => {
this.fadeInProps();
}}

  />

<View style={{backgroundColor: 'rgba(0,0,0,0.3)',marginHorizontal:10,borderBottomLeftRadius:20,borderTopRightRadius:30}}>

<Animatable.View animation="pulse" iterationCount='5'>
<Text style={{textAlign:'center',color:'white', padding:width*0.0241}}>Drag the above Slider to your desired political stance.</Text>
</Animatable.View>
</View>
</View>
<Animated.View
style={[
 
  {
    
    opacity: this.state.fadeAnim
  }
]}
>


        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: height*0.011,marginBottom:height*0.011 }}
            justifyContent='center'
          >
            <TouchableOpacity
              onPress={() => {
                 this.redirect_left();
              }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: height*0.073,
                width: width*0.15,
                borderRadius: width*0.12,
                backgroundColor: "white",
              }}
            >
             <Icon name="long-arrow-left" color="steelblue" size={width*0.077} />
            </TouchableOpacity>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: height*0.073,
                width: width*0.15,
                borderRadius: width*0.12,
                backgroundColor: "transparent",
                marginHorizontal: width*0.053,
              }}
            >
              <Icon name="angle-left" color="white" size={width*0.077} />
              <Icon name="angle-right" color="white" size={width*0.077} />
            </View>

         
              <TouchableOpacity
                onPress={() => {
                  this.redirect_right();
               }}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: height*0.073,
                width: width*0.15,
                borderRadius: width*0.12,
                backgroundColor: "white",
              }}
            >
             <Icon name="long-arrow-right" color="#f5aa42" size={width*0.077} />
            </TouchableOpacity>

           
          </ScrollView>
      
          <View style={{backgroundColor: 'rgba(0,0,0,0.3)',marginHorizontal:10,borderBottomLeftRadius:20,borderTopRightRadius:30,marginBottom:10,}}>
          <Animatable.View animation="pulse" iterationCount='10'>
<Text style={{textAlign:'center',color:'white', padding:width*0.0241}}>Now, click on the direction of your choice(Left/Right)</Text>
</Animatable.View>
</View>
            
            </Animated.View>
            </Animatable.View>
            </View>

            <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,

    marginHorizontal:width*0.048
  }}
/>

<View style={{backgroundColor: 'rgba(128,128,128,0.3)',marginHorizontal:width*0.024,borderTopLeftRadius:height*0.033,borderBottomRightRadius:height*0.033,marginTop:height*0.0111,marginBottom:height*0.0111}}>
                
<Animatable.View animation="fadeIn" delay={600}>
                <View style={{flexDirection:'row'}}>
                <View style={{width:"50%"}}>
              
        
     
          <TouchableOpacity
             style={{width:'80%', height:height*0.16,marginTop:height*0.022,alignSelf:'center'}}
             onPress={() => this.props.navigation.navigate("Assortment")}
            >
              <Image
                source={require('../images/covid.jpg')}
                style={{height:'100%',width:'100%', borderRadius:width*0.048}}
                
              />
            
            </TouchableOpacity>
            <Text
            style={{
              
           
            textAlign:'center',
           
              color: "white",
            
            fontSize: height*0.020,
            marginBottom:height*0.022,
            marginTop:height*0.005
           
           
       
             }} >
          Covid-19 updates
          </Text>
            </View>
            <View style={{width:"50%"}}>
           
         
         
          <TouchableOpacity
             style={{width:'80%', height:height*0.16,marginTop:height*0.022,alignSelf:'center'}}
             onPress={() => this.props.navigation.navigate("Sports")}
            >
              <Image
                source={require('../images/sports.jpg')}
                style={{height:'100%',width:'100%', borderRadius:width*0.048}}
                
              />
            
            </TouchableOpacity>
            <Text
            style={{
              
           
            textAlign:'center',
           
              color: "white",
            
            fontSize: height*0.020,
            marginBottom:height*0.022,
            marginTop:height*0.005
           
           
       
             }} >
          Sports News
          </Text>
            </View>
            </View>
            </Animatable.View>
          </View>
   

          

          <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  
    marginHorizontal:width*0.048,
    marginBottom:width*0.400
  }}
/>
    
          </ScrollView>
        
          {/* </Animated.View> */}
          </View>
      </ImageBackground>
    
   
    );
  }
}


const styles = StyleSheet.create({

  QuickLinks:{
    backgroundColor: "#FEFEFE",
    height: height*0.16,
    width: width*0.36,
    borderRadius: width*0.036,
    padding: width*0.012,
    marginRight:width*0.024,

  },
  QuickLinksImage:{
    width: width*0.33, borderRadius: width*0.024, height: height*0.089, 
  },
  QuickLinksText:{
    fontSize: height*0.016,
   
    color: "#522289",
 
    marginTop:height*0.011
  },
  ComponentView:{
  
    backgroundColor: 'rgba(142,143,214,0.5)',
 
  },
  fadingContainer: {
  
  
  },
})

