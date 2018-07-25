import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom,DrawerNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import promoterProfile from './promoterProfile';
import PromoterPayment from './promoterPayment/promoterPayment';
import promoterEvent from './promoterEvent';
import clubChat from './clubChat';
import autoVouchers from './addVoucher/autoVouchers';
import redeemVoucher from './redeemVoucher';
import sideDrawer from '../../containers/club/sideDrawer';

const TabStack = TabNavigator(
    {
        clubEvent:
        {
            screen:promoterEvent,
            navigationOptions: ({ navigation }) => ({
                title: 'Home',
                tabBarIcon: () => (<Image
                                  style={{ width: 24, height: 24 }}
                                  source={ require('../../containers/club/imagesClub/home.png')}/>),
			})
        },
        // CenterButton:
        // {
        //     screen:CenterButton,
        //     navigationOptions: ({ navigation }) => ({
        //         title: 'DatSpot',
        //         tabBarIcon: () =>  (<Image
        //                             style={{ width: 28, height: 28}}
        //                             source={ require('./images/small_button.png')}/>),               
		// 	})
        // },
        clubPayment:
        {
            screen:promoterPayment,
            navigationOptions: ({ navigation }) => ({
                title: 'Payment',
                tabBarIcon: () =>  (<Image
                                    style={{ width: 24, height: 24}}
                                    source={ require('../../containers/club/imagesClub/compass.png')}/>),
			})
        },
        clubChat:
        {
            screen:clubChat,
            navigationOptions: ({ navigation }) => ({
                title: 'Message',
                tabBarIcon: () => (<Image
                                    style={{ width: 24, height: 24 }}
                                    source={ require('../../containers/club/imagesClub/chat.png')}/>),
			})
        },
        clubProfile:
        {
            screen:promoterProfile,
            navigationOptions: ({ navigation }) => ({
                title:'Profile',
                tabBarIcon: () => (<Image
                                   style={{ width: 20, height:24}}
                                   source={ require('../../containers/club/imagesClub/user_fill.png')}/>),
			})
        }
    },

    {
        tabBarOptions : {
            tabStyle:
            {
              backgroundColor: '#232323',
              width:null,
              height:56,
            },
            labelStyle:
            {
              fontSize:12,
              color:'#ffffff',
              marginTop:5
            },
            showLabel: true,
            showIcon: true,
        //  activeTintColor: Colors.white,
		//  inactiveTintColor: Colors.transparentWhite,	
		//	upperCaseLabel: false,
		//	pressColor: Colors.transparentWhite,
		//	scrollEnabled: false,
        },
        initialRouteName: "promoterEvent",
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        order: ["promoterEvent","PromoterPayment","clubChat","promoterProfile"],
        backBehavior: "initialRoute",
        animationEnabled: false,
        swipeEnabled: false,
     }
);


const Drawer = DrawerNavigator({
    Tab:{
        screen:TabStack
    },
    autoVoucherScreen: {
        screen: autoVouchers,
      },
      redeemVoucherScreen: {
        screen: redeemVoucher,
      },
    },
    {
        initialRouteName: 'Tab',
        contentComponent: sideDrawer,
        drawerWidth: 300
});

export default Drawer
