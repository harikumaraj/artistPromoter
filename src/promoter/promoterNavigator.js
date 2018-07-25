import React from 'react';
import { createBottomTabNavigator }  from 'react-navigation';

import CustomTabNavigationBar from './components/customTabNavigator/customTabTabNavigator';
import PromoterPayment from './container/promoterPayment/promoterPayment';
import Messaging from './container/messaging/messaging';
import PromoterChat from './components/chat/chatPage';
import PromoterProfile from './container/promoterProfile';
import PromoterEvent from './container/promoterEvent';
import PromoterEventList from './container/promoterEvent';
import PromoterHome from './container/promoterHome';
import PromoterSelectMusicType from './container/selectMusicTypes/selectMusicType';
import PromoterSelectCity from './container/selectPreferedCity/selectPreferedCity'

export default createBottomTabNavigator(
    {
        PromoterHome:PromoterHome,
        PromoterPayment: PromoterPayment,
        PromoterChat: PromoterChat,
        PromoterMessaging: Messaging,
        PromoterProfile: PromoterProfile,
        PromoterEventList:PromoterEventList,
        PromoterEvent:PromoterEvent,
        PromoterSelectMusicType:PromoterSelectMusicType,
        PromoterSelectCity:PromoterSelectCity

    },
    {
        initialRouteName: "PromoterHome",
        tabBarOptions: {
            activeTintColor: 'rgb(255, 195, 43)',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: CustomTabNavigationBar
    },
);