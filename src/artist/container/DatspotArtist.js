import React, { Component } from 'react';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';
import UpcomingEvent from '../../containers/UpcomingEvent';
import EventsAttending from '../../containers/EventsAttending';
import EventsAttended from '../../containers/EventsAttended';

export default TabNavigator(
    {
        UpcomingEvent:
        {
          screen:UpcomingEvent,
          navigationOptions: ({ navigation }) => ({
            title:'Upcoming Event',               
          })
        },
        EventsAttending:
        {
          screen:EventsAttending,
          navigationOptions: ({ navigation }) => ({
            title:'Events Attending',                  
          })
        },
        EventsAttended:
        {
          screen:EventsAttended,
          navigationOptions: ({ navigation }) => ({
            title:'Events Attended',                  
          })
        }
    },
    {
      tabBarOptions: 
      {
          style: 
          {
            backgroundColor: '#000000',
            width:null,
            height:70,
            justifyContent:'space-between'
          },
          labelStyle:
          {
            fontSize:12
          },
          indicatorStyle: 
          {
            backgroundColor: '#FF41A8',
            height:null,
            top:0
          },
        activeTintColor:'white',
        inactiveTintColor:'white',
      },
       initialRouteName: "UpcomingEvent",
       tabBarPosition: 'top',
       order: ["UpcomingEvent", "EventsAttending", "EventsAttended"],
       backBehavior: "initialRoute",
       animationEnabled: false,
       swipeEnabled: true,
      
    }
  );