import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        ScrollView} from 'react-native';
import Header from '../../components/header/header';
import Feather from 'react-native-vector-icons/Feather';


export default class Message extends Component {
    render()
    {
      return(
    <ScrollView style={{flex:1,backgroundColor:'#000000'}}>

    <Header
        onPressLeftButton={()=>{
            this.props.navigation.toggleDrawer();
        }}
            leftIcon={ () => <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Feather
                    name="menu"
                    size={30}
                    style={{color:"#ffffff",alignSelf:'center'}}
                />
            </View>}
            middleText={ "MESSAGE" }
            // onPressRightButton={ this.drawerToggle }
            rightIcon={ () => 
            <View style={{flex:1,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                <View style={{
                  alignItems:'center',
                  justifyContent:'center',
                  position:"absolute",
                  right:"20%",
                  top:"20%",
                  width:16,
                  height:16,
                  borderRadius:8,
                  backgroundColor:"#000",
                  zIndex:16,}}>
                    <Text style={{color:"rgb(255,65,168)", fontSize:12}}>3</Text>
                </View>
                <Image resizeMode={"contain"} style={{alignItems:'center',justifyContent:'center'}} 
                source={require("../../containers/images/notification.png")}/>
            </View> }/>

        <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column',marginTop:5,marginBottom:15}}>

          <View style={{flexDirection:'row',margin:10}}>
           
            <View flexBasis="15%">

            <Image style={styles.imageCircle}
                 source={require('../../containers/images/d1.jpeg')}/>

            </View>

            <View style={{flexDirection:'column',marginHorizontal:10}}
                  flexBasis="85%">

             <View style={{flexDirection:'row'}}>

              <View flexBasis="80%">
                <Text style={styles.textClubName}>Sub Club, Glasgow</Text>
              </View>
              
              <View flexBasis="20%">
                <Text style ={styles.textTime}>10:30 PM</Text>
              </View>

             </View>

              <View style={{flexDirection:'row'}}>

                <View flexBasis="80%"
                      style={{justifyContent:'center'}}>
                <Text style={styles.textMessage}>Nice weather lets go for a walk</Text>
                </View>

                <View flexBasis="20%">
                <Text style ={styles.capsulText}>3</Text>
                </View>

            </View>
          </View>
       </View>
     </View>
   </ScrollView>
      );
    }
}

const styles = StyleSheet.create({

  imageCircle:
  {
     height: 60,
     width: 60,
     borderRadius: 30,
     flex:1,
     alignSelf:'stretch'
  },
  capsulText:
  {
   borderBottomLeftRadius:15,
   borderBottomRightRadius:15,
   borderTopLeftRadius:15,
   borderTopRightRadius:15,
   paddingVertical:5,
   paddingHorizontal:10,
   backgroundColor:'#FF41A8',
   fontSize:10,
   color:'#000000',
   margin:3,
   fontWeight:'bold',
   justifyContent:'center',
   alignSelf:'center'
  },
  textClubName:
  {
    color:'#ffffff',
    fontSize:14,
    fontWeight:'bold'
  },
  textMessage:
  {
    color:'#ffffff',
    fontSize:13,
  },
  textTime:
  {
    color:'#ffffff',
    fontSize:13,
  }
});