import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class EventsAttending extends Component{

    functionAlert()
    {
        Alert.alert("This is alert");
    }

 render()
 {
   return(
    <View style={{flex:1,
        backgroundColor:'#000000',
        flexDirection:'column'}}>

    <View style={{  flexDirection:'column',
                    marginVertical:20,
                    marginHorizontal:15,
                    borderBottomLeftRadius:5,
                    borderBottomRightRadius:5,
                    borderTopLeftRadius:5,
                    borderTopRightRadius:5,
                    elevation:3,
                    borderColor: '#ffffff',
                    borderWidth:1}}>

    <View style={{flexDirection:'row',justifyContent:'space-between',margin:8}}>
    <View style={{flexDirection:'column'}}>
    <Text style={styles.textStyleHeading}>London Club</Text>
    <Text style={styles.textStyle}>Street 22, London</Text>
    </View>

    <Text style={{color:'#1C9C1C',fontSize:13}}>Attending</Text>

    </View>  

<   Text style={{color:'#ffffff',fontSize:12,margin:8}}>Lorem Ipsum is simply dummy text of the printing and 
    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>

    <View style={{justifyContent:'space-between',margin:8,alignItems:'center',flexDirection:'row'}}>

    <Text style={styles.textStyle}>5pm-3am</Text>

    <Text style={styles.textStyle}>Today</Text>

    <Text style={styles.textStyle}>Minimum Age:18</Text>

    </View>
    </View>
    </View>
   );
 }
}

const styles = StyleSheet.create({

    textStyle:
    {
      color:'#ffffff',
      fontSize:12,
    },
    textStyleHeading:
    {
        color:'#ffffff',
        fontSize:14,
    }

});