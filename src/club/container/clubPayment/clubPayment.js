import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../../components/header/header';
import style from './style';

export default class clubPayment extends Component{

    drawerToggle(){
        this.props.navigation.drawerToggle();
        // console.log(this.props)
    }

    render()
    {
        return(
            <View style={{flex:1,flexDirection:'column',backgroundColor:'#000000'}}>
                <Header
                    onPressLeftButton={()=>{
                        this.drawerToggle();
                    }}
                    leftIcon={ () => <View style={style.headerIconContainer}>
                        <SimpleLineIcons
                            name="menu"
                            size={25}
                            style={{color:"#ffffff"}}
                        />
                    </View>}
                    middleText={ "PAYMENT" }
                    onPressRightButton={()=>{
                        this.drawerToggle();
                    }}
                    rightIcon={ () => <View style={style.headerIconContainer}>
                        <View style={style.notificationCountContainer}>
                            <Text style={{color:"rgb(255,65,168)", fontSize:10}}>3</Text>
                        </View>
                        <Image resizeMode={"contain"} style={style.notificationIcon} source={require("../../../assets/notificationBell.png")}/>
                    </View> }
                />
                <View style={style.container}>
                    <View style={style.tabContainer}>
                        <TouchableOpacity style={style.tabButton}>
                            <Text style={style.tabButtonText}>Payment Method</Text>
                        </TouchableOpacity>
                        <View style={{height:"80%", width:1, backgroundColor:"#fff"}}/>
                        <TouchableOpacity style={style.tabButton}>
                            <Text style={style.tabButtonText}>Transfer Money</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}