import React, { Component } from 'react';
import {createDrawerNavigator} from 'react-navigation';
import Login from '../containers/login/login';
import SignUp from '../containers/signUp/signUp';
import ForgetPass from '../containers/resetPassword/resetPasswordPage';
import Category from '../containers/Category/Category';
import SubCategory from '../containers/selectMusicTypes/selectMusicType';
import SelectPreferredCity from '../containers/selectPreferedCity/selectPreferedCity'


//======================= CLUB CLASSES ==============================//
import clubHome from '../club/container/clubHome';
import ClubAdd from '../club/container/clubAdd';
import autoVouchers from '../club/container/addVoucher/autoVouchers';
import redeemVoucher from '../club/container/redeemVoucher';



import ArtistNavigator from '../artist/artistNavigator';
import ClubNavigator from '../club/clubNavigator'
import promoterNavigator from '../promoter/promoterNavigator'
import SelectClub from "../club/container/selectClub/selectClub";
import MomentFilter from "../club/container/momentFilter/momentFilter";

const RootNavigator = createDrawerNavigator(
    {
        LoginScreen: {screen:Login},
        SignUpScreen: {screen:SignUp},
        ForgetPassScreen: {screen:ForgetPass},
        Category: {screen:Category},
        SubScreen: {screen:SubCategory},
        ClubHomeScreen: {screen:clubHome},
        ClubAddScreen: {screen:ClubAdd},
        AutoVoucherScreen: {screen: autoVouchers},
        RedeemVoucherScreen: {screen: redeemVoucher},
        SelectCity: {screen:SelectPreferredCity},
        ArtistNavigator:{screen:ArtistNavigator},
        clubNavigator:{screen:ClubNavigator},
        promoterNavigator: promoterNavigator,
        SelectClub: SelectClub,
    },
    {
        initialRouteName: 'LoginScreen',
    }
);

export default RootNavigator;

