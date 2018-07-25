import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { width, height, totalSize } from 'react-native-dimension';


export default class ClubDetail extends Component{

 functionAlert()
  {
      Alert.alert("This is alert");
  }

 render()
 {
  return(
   <ScrollView style={{flex:1,backgroundColor:'#000000'}}>
      <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>
        <ImageBackground style={styles.clubImage}
                        source={require('./images/d1.jpeg')}
                        resizeMode={'cover'}>

         <Image style={{marginHorizontal:5,marginVertical:5}}
                source={require('./images/back.png')}/>

         <Text style = {{padding:5,color:'#ffffff',fontSize:14}}>Back</Text>

        </ImageBackground>

        <View style={{marginHorizontal:10,marginVertical:15,flexDirection:'row'}}>

            <View flexBasis="50%"style={{flexDirection:'row'}}>

                <Text style={styles.capsulText}>POP</Text>
                <Text style={styles.capsulText}>JAZZ</Text>

            </View>  

            <View flexBasis="50%">

            <LinearGradient colors={['#FF41A8','#FFB847']} 
                            style={{width:"50%",
                           borderBottomLeftRadius:20,
                           borderBottomRightRadius:20,
                           borderTopLeftRadius:20,
                           borderTopRightRadius:20,
                           alignItems:'center',
                           alignSelf:'flex-end',
                           justifyContent:'center'}}>
                                                                                                                                  
                   <TouchableHighlight style={{
                                       paddingHorizontal:15,
                                       paddingVertical:8,
                                       justifyContent:'center',
                                       alignItems:'center'}}
                                       
                    onPress = {this.functionAlert}>
            
                  <Text style={{color:'#ffffff',fontSize:15}}>Follow</Text>
               
                </TouchableHighlight>

               </LinearGradient>

            </View>  
        </View>

        <View style={{flexDirection:'row',marginHorizontal:20,marginTop:15,marginBottom:10}}>

         <View style={{flexDirection:'row',marginRight:5}}
               flexBasis="60%">
            
           <Text style={styles.textClubName}>London Club</Text>
           <Text style={styles.clubAddress}>Coricon, London</Text>

         </View>

          <View style={{flexDirection:'row',marginLeft:5,justifyContent:'flex-end'}}
                flexBasis="40%">

            <Text style={styles.textDistance}>10 miles away</Text>
         </View>

        </View>

         <Text style={styles.textClubDescription}>Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>

        <View style={{flexDirection:'row',marginHorizontal:20,marginVertical:10}}>

         <View style={{flexDirection:'row'}}
               flexBasis="50%">

           <Image source={require('./images/heart_white.png')}/>
           <Text style={{color:'#ffffff',fontSize:13,marginLeft:8}}>1000</Text>

           <Image style={{marginLeft:20}}
                  source={require('./images/comment.png')}/>

           <Text style={{color:'#ffffff',fontSize:13,marginLeft:8}}>999</Text>

         </View>
           <View style={{flexDirection:'row',justifyContent:'flex-end'}}
                flexBasis="50%">

            <Image style={{marginRight:15}}
                   source={require('./images/heart_pink.png')}/>
                   
             <Image source={require('./images/share.png')}/>

          </View>
       </View>

       <Text style={styles.textClubDescription}>Artist already partnered (Total 15)</Text>

       <View style={{flexDirection:'row',
                     marginLeft:30,
                     marginRight:20,
                     marginVertical:10}}
             flexBasis="50%">

       <Image style={styles.imageClubCircle}
              source={require('./images/d4.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d2.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d5.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d3.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d1.jpeg')}
              flexBasis="15%"/>

        <Image style={styles.imageClubCircle}
              source={require('./images/d4.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d6.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d2.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d5.jpeg')}
              flexBasis="15%"/>

       <Image style={styles.imageClubCircle}
              source={require('./images/d3.jpeg')}
              flexBasis="15%"/>

       </View>

       <View style={{borderColor:'#ffffff',
                    borderRadius:10,
                    borderWidth:1,
                    marginHorizontal:30,
                    marginVertical:15,
                    flexDirection:'column'}}>

       <Text style={{color:'#ffffff',
                     fontSize:16,
                     fontWeight:'bold',
                     alignSelf:'center',
                     marginHorizontal:20,
                     marginTop:20,
                     marginBottom:5}}>Wanna join the club as artist?</Text>

       <Text style={{color:'#ffffff',
                     fontSize:14,
                     alignSelf:'center',
                     marginHorizontal:20,
                     marginTop:5,
                     marginBottom:5}}>Follow the club and submit your proposal</Text>

         <LinearGradient colors={['#FF41A8','#FFB847']} 
                         style={{
                           borderBottomLeftRadius:20,
                           borderBottomRightRadius:20,
                           borderTopLeftRadius:20,
                           borderTopRightRadius:20,
                           marginHorizontal:8,
                           marginVertical:20,
                           alignItems:'center',
                           justifyContent:'center'}}>
                                                                                                                                  
                   <TouchableHighlight style={{
                                       paddingHorizontal:15,
                                       paddingVertical:8,
                                       justifyContent:'center',
                                       alignItems:'center'}}
                                       
                    onPress = {this.functionAlert}>
            
             <Text style={{color:'#ffffff',fontSize:15}}>FOLLOW and SUBMIT PROPOSAL</Text>
               
          </TouchableHighlight>

         </LinearGradient>

       </View>

     </View>
   </ScrollView>
  );
 }
}

const styles = StyleSheet.create({

    clubImage:
    {
      height: height(40), // 40% of height device screen
      width: "100%",
      flexDirection:'row'
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
     fontSize:14,
     fontWeight:'bold',
     color:'#ffffff',
     margin:3,
     fontWeight:'bold',
     justifyContent:'center',
     alignSelf:'center'
    },
    textClubName:
    {
        color:'#ffffff',
        fontSize:15,
        fontWeight:'bold'
    },
    clubAddress:
    {
      color:'#ffffff',
      fontSize:13,
      marginLeft:8,
      alignSelf:'center'
    },
    textDistance:
    {
      color:'#ffffff',
      fontSize:13,
      marginRight:5
    },
    textClubDescription:
    {
        color:'#ffffff',
        fontSize:14,
        marginHorizontal:20,
        marginBottom:5
    },
    imageClubCircle:
    {
       height: 60,
       width: 60,
       borderRadius: 30,
       marginLeft:-20,
       flex:1
    },
    
});