import  React, {Component } from 'react';
import { View } from 'react-native';
import { Layout, TopNav, Text, theme} from 'react-native-rapi-ui';

import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, Linking, ImageBackground, StatusBar, Alert,ScrollView, TextInput,SafeAreaView, Dimensions, RefreshControl,Animated} from 'react-native';
import {Card, Button} from 'react-native-elements';
import { FacebookLoader, InstagramLoader, ContentLoader } from 'react-native-easy-content-loader';
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



export default class RightWingScreen extends Component {

	


	


  constructor(props) {
    super(props);

    this.state = {
	
      data: [],
      isLoading: true,
	  index: 0,
	  refreshing: false,
      value: 50,
    fadeAnim: new Animated.Value(0)
	  
    };
  }





  componentWillMount() {
    fetch("https://free-news.p.rapidapi.com/v1/search?q=corona||virus&lang=en&page_size=20", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3037f74bc0mshaca293013ced8ddp1e7243jsn3d8392663168",
		"x-rapidapi-host": "free-news.p.rapidapi.com"
	}
})
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.articles });
      })
     
      .finally(() => {
        this.setState({ isLoading: false });
      });
	  
  }



  render() {
    const { data, isLoading } = this.state;
	

    return (
		
		<ImageBackground
        
        style={{ width: "100%", height: "100%",backgroundColor:'black' }}
      >
		  <View style={{ justifyContent:'center' }}>
		  <Header 

/>
	
	</View>
	

				
					
			
					<ScrollView>
						
				<View style={{marginHorizontal:width*0.048}}>
				
{/* <Text
            style={{
              color: "#522289",
        
            fontSize: height*0.0279,
            marginTop:height*0.022,
           fontFamily:'RobotoBold'
            }}
          >
          Handpicked articles for you, <Text>({this.state.index})</Text>
          </Text> */}
		 
		
</View>
				
				<View
					style={{
						
						alignItems: 'center',
						justifyContent: 'center',
						marginTop:height*0.020
					}}
				>
				 
				 <View>
					
					  {isLoading ? <View style={{height:'100%',width:'100%'}}><InstagramLoader active /></View> : (
						
						<View>
						<View style={{ flexDirection:'row', justifyContent: 'center', }}>
			

<ScrollView >
<Carousel
		 
		 
          ref={(c) => this.carousel = c}
		  keyExtractor={({ id }, index) => id}
		  sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        //   containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}  
          data={data}
          renderItem={({ item }) => (
			<Animatable.View animation="bounceInLeft" useNativeDriver='true' delay={100}>
				  <TouchableOpacity>
			<View style={{
				backgroundColor:'white',
			
				width:'100%',
				padding: height*0.0111,
				
				}}>

<View>

<ImageBackground
                     source={{ uri: item.media }}
                  
                    style={styles.image}
                 
                
                >
					<View style={{backgroundColor:'white', opacity:0.8,padding:height*0.0055}}>
					<Text style={styles.itemLabel}>
					{item.title}.
					
					
					</Text>
					</View>
				
					</ImageBackground>

<View
	  style={{
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		marginTop:height*0.012,
		marginBottom:height*0.012,

	  
	  }}
	/>

<View style={{}}>
<Text style={{fontSize:height*0.022,color:'black'}} numberOfLines={6}><Text style={{fontSize:height*0.0312, fontFamily: 'TimesNewRomanPSMT'}}>Brief : </Text>{item.summary} </Text>
</View>	
<View
	  style={{
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		marginTop:height*0.012,
		marginBottom:height*0.012,

	  
	  }}
	/>
	<Text style={{fontSize:height*0.0133,color:'black'}}>Published : {item.published_date} </Text>
	<Text style={{fontSize:height*0.0133,color:'black'}}>Publisher : {item.author}-{item.clean_url} </Text>
	<View
	  style={{
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		marginTop:height*0.012,
		marginBottom:height*0.012,

	  
	  }}
	/>
	<View>
	<Animatable.View animation="pulse" iterationCount='2' useNativeDriver='true' delay={150}>
	<Button 
	  icon={{
		name: "check",
		size: height*0.016,
		color: "white"
	  }}
	  buttonStyle={{
		backgroundColor: "black",
		borderTopLeftRadius:height*0.012,
		borderBottomRightRadius:height*0.012
	 }}
	 onPress={() =>  
        this.props.navigation.navigate('Webview', {  
            main_link: item.link
              
        })}  
					title="View Entire Article"
					
				/></Animatable.View>
		</View>
	

</View>
		  </View>
		 
		  </TouchableOpacity>
		  </Animatable.View>
		  )}
               
        />
		<Animatable.View animation="bounceInDown" useNativeDriver='true' delay={1000}>
		<View style={{marginBottom:10,backgroundColor: 'rgba(128,128,128,0.5)',borderBottomRightRadius:30,borderTopLeftRadius:30,padding:5,marginHorizontal:20}}>
	
				<Text style={{fontSize:height*0.022,color:'white',textAlign:'center'}}>Handpicked articles for you.</Text>
				</View></Animatable.View>
		</ScrollView>
					
</View>

	
	
</View>
			

			
			
         

		
        )}
		

     	</View>
			</View>
			
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
  });