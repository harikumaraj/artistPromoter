import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import CustomTabNavigationBar from './component/customTabNavigator/customTabTabNavigator'
import HomeArtist from './container/HomeArtist';
import DiscoverArtist from './container/discover/discover';
import Messaging from './container/messaging/messaging';
import ProfileArtist from './container/ProfileArtist';
import HomeFollowAll from './container/HomeFollowAll';
import CenterButton from "./container/DatspotArtist";
import ClubDetail from "../containers/ClubDetail";
import Chat from './component/chat/chatPage';
import SelectMusicType from './container/selectMusicTypes/selectMusicType'
import SelectCity from './container/selectPreferedCity/selectPreferedCity';
// import PostDetail from './container/postDetail/postDetail';
// import ProfileUpdate from './container/profileUpdate/profileUpdate';
// import EventDetails from "./container/eventDetails/eventDetails";
// import Payment from "./component/payment/payment";

export default createBottomTabNavigator(
    {
        ArtistHome: HomeArtist,
        DiscoverArtist: DiscoverArtist,
        CenterButton: CenterButton,
        MessageArtist: Messaging,
        Profile: ProfileArtist,
        ClubDetailScreen: ClubDetail,
        Chat: Chat,
        ArtistSelectMusicType: SelectMusicType,
        ArtistSelectCity:SelectCity,
        // postDetails: PostDetail,
        // updateProfile:ProfileUpdate,
        // eventDetails: EventDetails,
        // payment: Payment
    },
    {
        initialRouteName:"ArtistHome",
        tabBarOptions: {
            activeTintColor: 'rgb(255, 195, 43)',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: CustomTabNavigationBar
    },
);