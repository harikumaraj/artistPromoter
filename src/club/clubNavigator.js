import React from 'react';
import { createBottomTabNavigator }  from 'react-navigation';

import CustomTabNavigationBar from './components/customTabNavigator/customTabTabNavigator'
import clubEvent from './container/clubEvent';

import clubPayment from './container/clubPayment/clubPayment';
import addEvent from './container/addEven/addEvent';
import ClubMessaging from './container/messaging/messaging';
import clubProfile from './container/clubProfile';
import autoVouchers from './container/addVoucher/autoVouchers';
import redeemVoucher from './container/redeemVoucher';
import ClubChat from './components/chat/chatPage'
import SelectClub from './container/selectClub/selectClub'
import MomentFilter from "./container/momentFilter/momentFilter";
import SelectMusicType from './container/selectMusicTypes/selectMusicType';
import SelectCity from './container/selectPreferedCity/selectPreferedCity';

export default createBottomTabNavigator(
    {
        ClubEvent: clubEvent,
        ClubPayment: clubPayment,
        AutoVoucher: autoVouchers,
        ClubMessaging: ClubMessaging,
        ClubProfile: clubProfile,
        AddEvent: addEvent,
        RedeemVoucherScreen: redeemVoucher,
        ClubChat: ClubChat,
        SelectClub: SelectClub,
        MomentFilter:MomentFilter,
        ClubSelectMusicType: SelectMusicType,
        ClubSelectCity:SelectCity,
    }
    ,
    {
        initialRouteName: "ClubEvent",
        tabBarOptions: {
            activeTintColor: 'rgb(255, 195, 43)',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: CustomTabNavigationBar
    },
);