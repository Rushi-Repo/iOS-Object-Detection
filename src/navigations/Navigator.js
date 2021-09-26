import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


import Home from '../screens/Home';
import Login1 from '../screens/Login1';
import RightWingScreen from '../screens/RightWingScreen';
import LeftWingScreen from '../screens/LeftWingScreen';
import Assortment from '../screens/Assortment';
import Header from '../components/Header'
import Header_animate from '../screens/Header_animate';
import Sports from '../screens/Sports';
import CenterLeft from '../screens/CenterLeft';
import CenterRight from '../screens/CenterRight';
import Neutral from '../screens/Neutral';
import Feedback from '../screens/Feedback';
import Webview from '../screens/Webview'

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Login1:{screen:Login1},
    Home:{screen:Home},
    RightWingScreen:{screen:RightWingScreen},
    LeftWingScreen:{screen:LeftWingScreen},
    Assortment:{screen:Assortment},
    Header: {screen:Header},
    Header_animate:{screen:Header_animate},
    Sports:{screen:Sports},
    CenterLeft:{screen:CenterLeft},
    CenterRight:{screen:CenterRight},
    Neutral:{screen:Neutral},
    Feedback:{screen:Feedback},
    Webview:{screen:Webview}
},
{
    defaultNavigationOptions:stackNavigatorOptions
});

export default createAppContainer(AppNavigator)

