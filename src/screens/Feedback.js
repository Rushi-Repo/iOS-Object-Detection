import  React, {Component } from 'react';
import { View } from 'react-native';
import { Layout, TopNav, Text, theme} from 'react-native-rapi-ui';

import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, Linking, ImageBackground, StatusBar, Alert,ScrollView, TextInput,SafeAreaView, Dimensions, RefreshControl,Animated} from 'react-native';
import {Card, Button} from 'react-native-elements';
import { FacebookLoader, InstagramLoader } from 'react-native-easy-content-loader';
import { scrollInterpolator, animatedStyles } from '../utils/animations';
import Header from '../components/Header'
import Carousel from 'react-native-snap-carousel';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.1);
const { width: screenWidth } = Dimensions.get('window')



export default class Feedback extends Component {

	


	


  


  render() {

	

    return (
		
		<ImageBackground
	
		style={{ width: "100%", height: "100%", backgroundColor:'black' }}
	  >
	   
                    <View style={{ marginTop: height*0.020, justifyContent:'center' }}>
                    {/* <Animatable.View animation='bounceInDown' delay='100'>    */}
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
  

{/* </Animatable.View>
<Animatable.View animation='bounceIn' delay='150'> */}

                  
 
{/* </Animatable.View> */}
    </View>
    
   
	

				
					
			
					<ScrollView style={{marginTop:20}}>
          <Animatable.View animation='fadeIn' delay={500}>
                    <View style={{paddingHorizontal:width*0.048,backgroundColor: 'rgba(128,128,128,0.4)',marginHorizontal:width*0.024,borderTopLeftRadius:height*0.033,borderBottomRightRadius:height*0.013,marginBottom:height*0.0111,paddingVertical:10}}>
                    <Text style={styles.text}>Developer : Rushikesh Kshirsagar</Text>
                    <Text style={styles.text}>Email : rushi1905@gmail.com</Text>
                    <Text style={styles.text}>Phone : +19083466793{'\n'}</Text>
          
                    <Text style={styles.text_url}
      onPress={() => Linking.openURL('http://unbiase1.wwwsg1-ss17.a2hosted.com/#')}>
Company Website
</Text>
                </View>
                 </Animatable.View>
                <Animatable.View animation='fadeIn' delay={800}>
                <View style={{paddingHorizontal:width*0.048,backgroundColor: 'rgba(128,128,128,0.4)',marginHorizontal:width*0.024,borderTopLeftRadius:height*0.033,borderBottomRightRadius:height*0.033,marginBottom:height*0.0111,paddingVertical:10,marginTop:10}}>
                    
                    <Text style={styles.text}>As the Artifical Intilligence model used to solicite news articles in this App is still in it's early stages, any suggestions/feedback will come in extremely handy.{'\n'}</Text>
                    <Text style={styles.text}>You can share your thoughts as Reviews on the App Store or use the contact information provided above to get in touch.</Text>
                </View>
                </Animatable.View>
			
		</ScrollView>
		
		</ImageBackground>
	
    );
  }
};

const styles = StyleSheet.create({
	news_image: {
	  paddingTop: height*0.133,
	
	  
	},
	title: {
	  fontSize:height*0.027,
	  padding:width*0.024
	},
	backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        height:'100%',
		width:'100%'
        
    },
	description:{
		padding:width*0.0241
	},
	card:{
		marginBottom:height*0.0111,
		 marginTop:height*0.011, 
	
	},
	backgroundContainer: {
       
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }, 
	carouselContainer: {
		height:height*0.63,
		
	  },
	  itemContainer: {
		width: ITEM_WIDTH,
		height: ITEM_HEIGHT,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'dodgerblue'
	  },
	  itemLabel: {
		color: 'black',
		fontSize: height*0.022,
		opacity:1
	  },
	  counter: {
		
		fontSize: height*0.022,
		fontWeight: 'bold',
		textAlign: 'center',
		color:'white'
	  },
	
	  image: {
	
		height:height*0.30,
		width:'100%',
		alignSelf:'center',
		
		
		
	  },
	  item: {
		width: screenWidth - (width*0.144),
		height: screenWidth - (width*0.144),
	  },
      text:{
color:'white',

      },
      text_url:{
        color:'white',
        textDecorationLine:'underline'
              },
  });