import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Alert,
        Image,
        TouchableOpacity,
        TouchableHighlight} from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';

export default class Fb_Tweet extends Component{

    functionAlert()
    {
        Alert.alert("This is alert");
    }

    render()
    {
       return(

        <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>

          <View style={{flex:1,flexDirection:'column'}}>
         
         <View style={{height:40,width:null}}/>

         <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Image source={require('../images/logo.png')}
                 style={{height:150,width:150}}
                 resizeMode={"contain"}/>
         </View>

         <Text style={style.textHeading}>Sync your account and hello yourself</Text>

           <Text style={style.textSubheading}>to reach to maximum folks </Text>

           <TouchableHighlight style={{padding:10,
                                       marginTop:25,
                                       height:40,
                                       width:250,
                                       borderBottomLeftRadius:5,
                                       borderBottomRightRadius:5,
                                       borderTopLeftRadius:5,
                                       borderTopRightRadius:5,
                                       backgroundColor:'#3b5998',
                                       alignSelf:'center'}}
                               onPress = {this.functionAlert}>
                
               <Text style={{color:'#ffffff',
                            fontSize: 15,
                            textAlign:'center',
                            }}>Sync Facebook</Text>
               
          </TouchableHighlight>

          <TouchableHighlight style={{padding:10,
                                       marginTop:10,
                                       height:40,
                                       width:250,
                                       borderBottomLeftRadius:5,
                                       borderBottomRightRadius:5,
                                       borderTopLeftRadius:5,
                                       borderTopRightRadius:5,
                                       backgroundColor:'#00aced',
                                       alignSelf:'center'}}
                               onPress = {this.functionAlert}>
                
               <Text style={{color:'#ffffff',
                            fontSize: 15,
                            textAlign:'center',
                            }}>Sync Twitter</Text>
               
          </TouchableHighlight>

        </View>
       
        <View style={style.viewButton}>

        <TouchableOpacity 
         style={style.buttonContainer}
         >

        <LinearGradient colors={['#FF41A8','#FFB847']} style={style.button}>
        <Text style={{color:'#ffffff',fontSize: 15,textAlign:'center'}}>PROCEED</Text>
        </LinearGradient>

        </TouchableOpacity>
        </View>
     
        </View>

       );
    }
}