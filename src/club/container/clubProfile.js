import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Alert,
        TextInput,
        Image,
        TouchableHighlight,
        ScrollView,
        Modal,
        TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { width, height, totalSize } from 'react-native-dimension';

export default class clubProfile extends Component{

  constructor(props)
  {
      super(props);
      this.state= {
        editProfile:false,
        clubName:'',
        atmosphere:'',
        location:'',
        contactNumber:'',
      };
  }

  functionAlert()
  {
      Alert.alert("This is alert");
  }

  editProfileFunction(visible)
  {
    this.setState({editProfile:visible});
  }


    render()
    {
      return(
<ScrollView style={{flex:1,backgroundColor:'#000000'}}>

{/* //============================= TOP PROFILE ==========================================// */}

      <View style={{flexDirection:'row',margin:10}}>

         <View style={{flexDirection:'row',
                       marginTop:10,
                       marginHorizontal:5,
                       marginBottom:5}}
                       flexBasis="50%">
          
          <Image style={styles.imageCircle}
                 source={require('../../containers/club/imagesClub/d3.jpeg')}
                 flexBasis="35%"/> 
        
          <View style={{flexDirection:'column',
                        marginLeft:10}}
                        flexBasis="65%">

           <Text style={{color:'#ffffff',fontSize:14}}>London Club</Text>
           <Text style={styles.textStyle}>1k followers</Text>

           
          <View style={{height:45,
                       flexDirection:'row',
                       justifyContent:'space-between'}}
                       flexBasis="85%">

         <Text style={styles.capsulText}>DJ</Text>
         <Text style={styles.capsulText}>JAZZ</Text>
         <Text style={styles.capsulText}>ROCK</Text>

         </View>

          </View>

         </View>

         <View style={{flexDirection:'column', 
                       marginTop:10,
                       marginHorizontal:5,
                       marginBottom:5,
                       alignItems:'flex-end'}}
                       flexBasis="50%">

         <TouchableOpacity activeOpacity = {.5} 
                             onPress={() => {this.editProfileFunction(true)}}>

         <Image style={{height:24,width:24,marginRight:20}}
                         source={require('../../containers/club/imagesClub/edit.png')}/>

          </TouchableOpacity>

         <Text  style={{position:'absolute',
                        top:"65%",
                        bottom:0,
                        left:"60%",
                        right:0,
                        marginRight:20,
                        color:'#ffffff',
                        fontSize:12}}>Yesterday</Text>

          </View>     
         </View>
{/* //============================= TOP PROFILE ==========================================// */}
         <View style={{marginHorizontal:10}}>

         <Text style={{color:'#ffffff',fontSize:14,margin:8}}>Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>

        </View>
{/* //============================= IMAGES ==========================================// */}
       

          <View style={styles.imageArea}>
          
          <Image style={styles.userImages}
                 source={require('../../containers/club/imagesClub/d2.jpeg')}/>

          <Image style={styles.userImages}
                 source={require('../../containers/club/imagesClub/d3.jpeg')}/>

          <Image style={styles.userImages}
                 source={require('../../containers/club/imagesClub/d4.jpeg')}/>

         </View>

          <View style={styles.imageArea}>
          
          <Image style={styles.userImages}
                 source={require('../../containers/club/imagesClub/d5.jpeg')}/>

          <Image style={styles.userImages}
                 source={require('../../containers/club/imagesClub/d6.jpeg')}/>

          <Image style={styles.userImages}
                 source={require('../../containers/club/imagesClub/d1.jpeg')}/>

         </View>
{/* //============================= IMAGES ==========================================// */}

         <Text style={{color:'#FF41A8',
                    textAlign:'center',
                    padding:5,
                    fontSize:15}}>View All</Text>

          <Text style={{color:'#ffffff',
                        marginTop:10,
                        marginHorizontal:8,
                        fontWeight:'bold',
                        fontSize:16}}>Social Connect</Text>

{/* //============================= FACEBOOK ==========================================// */}

           <View style={{flexDirection:'row',
                        width:null,
                        justifyContent:'space-between',
                        marginTop:10,
                        marginHorizontal:10}}>

           <Text style={{color:'#ffffff',
                        fontSize:15}}>Facebook</Text>

           <Text style={{color:'#ffffff',
                        alignSelf:'flex-end',
                        paddingHorizontal:10,
                        fontSize:15}}>Synced</Text>
          </View>
{/* //============================= FACEBOOK ==========================================// */}

{/* //============================= TWITTER ==========================================// */}

         <View style={{flexDirection:'row',
                         width:null,
                         justifyContent:'space-between',
                         alignItems:'center',
                         marginTop:10,
                         marginHorizontal:10,}}>

           <Text style={{color:'#ffffff',
                        fontSize:15}}>Twitter</Text>

           <LinearGradient colors={['#FF41A8','#FFB847']} 
              style={{borderBottomLeftRadius:15,
                borderBottomRightRadius:15,
                borderTopLeftRadius:15,
                borderTopRightRadius:15,
                alignItems:'center',
                justifyContent:'center'}}>
                                                                                                                                  
           <TouchableHighlight style={{paddingHorizontal:20,
                                       paddingVertical:8,
                                       justifyContent:'center',
                                       alignItems:'center'}}
                                       
            onPress = {this.functionAlert}>
            
            <Text style={{color:'#ffffff',fontSize:15}}>Sync</Text>
               
           </TouchableHighlight>
         </LinearGradient>

        </View> 

{/* //============================= TWITTER ==========================================// */}

{/* //============================= INSTAGRAM ==========================================// */}

           <View style={{flexDirection:'row',
                        width:null,
                        justifyContent:'space-between',
                        marginTop:10,
                        marginHorizontal:10}}>

           <Text style={{color:'#ffffff',
                        fontSize:15}}>Instagram</Text>

           <Text style={{color:'#ffffff',
                        alignSelf:'flex-end',
                        paddingHorizontal:10,
                        fontSize:15}}>Synced</Text>
          </View>
{/* //============================= INSTAGRAM ==========================================// */}

{/* //============================= EMAIL ==========================================// */}

           <View style={{flexDirection:'row',
                        width:null,
                        justifyContent:'space-between',
                        marginTop:10,
                        marginHorizontal:10}}>

           <Text style={{color:'#ffffff',
                        fontSize:15}}>Email</Text>

           <Text style={{color:'#ffffff',
                        alignSelf:'flex-end',
                        paddingHorizontal:10,
                        fontSize:15}}>contactus@londonclub.com</Text>
          </View>
{/* //============================= EMAIL ==========================================// */}

{/* //============================= EMAIL ==========================================// */}

           <View style={{flexDirection:'row',
                        width:null,
                        justifyContent:'space-between',
                        marginTop:10,
                        marginHorizontal:10}}>

           <Text style={{color:'#ffffff',
                        fontSize:15}}>Phone</Text>

           <Text style={{color:'#ffffff',
                        alignSelf:'flex-end',
                        paddingHorizontal:10,
                        fontSize:15}}>0770009900999</Text>
          </View>
{/* //============================= EMAIL ==========================================// */}

{/* //============================= EDIT POP-UP ==========================================// */}

  <Modal
         animationType="fade"
         transparent={false}
         visible={this.state.editProfile}
         onRequestClose={() => {
            alert('Modal has been closed.');
          }}>

         <View style={{height:"80%",
                     width:"80%",
                     flexDirection:'column',
                     backgroundColor:'#000000',
                     alignSelf:'center',
                     borderRadius:20,
                     position:'absolute',
                     top:50,
                     bottom:0,
                     left:40,
                     right:0}}>

         <Text style={{alignSelf:'center',
                      fontSize:15,
                      fontWeight:'bold',
                      color:'#ffffff',
                      marginHorizontal:20,
                      marginTop:20,
                      }}>Edit Profile</Text>

          <Text style={styles.textPopUpHeading}>Club Name</Text>
          <View style={styles.viewPopUpEdittext}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(clubName) => this.setState({clubName})}
                     value = {this.state.clubName}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

          <Text style={styles.textPopUpHeading}>Atmosphere</Text>
          <View style={styles.viewPopUpEdittext}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(atmosphere) => this.setState({atmosphere})}
                     value = {this.state.atmosphere}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

          <Text style={styles.textPopUpHeading}>Location</Text>
          <View style={styles.viewPopUpEdittext}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(location) => this.setState({location})}
                     value = {this.state.location}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

          <Text style={styles.textPopUpHeading}>Contact Number</Text>
          <View style={styles.viewPopUpEdittext}>
          <TextInput style = {styles.textPopUpEdittext}
                     onChangeText = {(contactNumber) => this.setState({contactNumber})}
                     value = {this.state.contactNumber}
                     keyboardType='numeric'
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>
          </View>

          <Text style={styles.textPopUpHeading}>Add Images</Text>
          <LinearGradient colors={['#FF41A8','#FFB847']}
                          style={{width:"40%",
                          borderRadius:20,
                          marginHorizontal:10,  
                          marginVertical:10,      
                          alignItems:'center',
                          justifyContent:'center'}}>

          <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}
                                 
          onPress = {() => {this.functionAlert}}>
      
          <Text style={{color:'#ffffff',fontSize:15}}>IMAGES</Text>
         
          </TouchableHighlight>

          </LinearGradient>
         
           <View style={{
             marginHorizontal:10,
             flexDirection:'row',
             justifyContent:'center',
             marginTop:25}}>

            <LinearGradient colors={['#FF41A8','#FFB847']}
                            flexBasis="40%" 
                            style={{width:"50%",
                            borderRadius:20,
                            alignItems:'center',
                            marginHorizontal:10,
                            marginVertical:5,                     
                            justifyContent:'center'}}>

            <View style={styles.buttonBlack}>

            <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}
                                 
            onPress = {() => {this.editProfileFunction(false)}}>
      
            <Text style={{color:'#ffffff',fontSize:15}}>BACK</Text>
         
            </TouchableHighlight>

            </View>

            </LinearGradient>


          <LinearGradient colors={['#FF41A8','#FFB847']}
                          flexBasis="40%" 
                          style={{width:"50%",
                          borderRadius:20,
                          marginHorizontal:10,  
                          marginVertical:5,      
                          alignItems:'center',
                          justifyContent:'center'}}>

          <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}
                                 
          >
      
          <Text style={{color:'#ffffff',fontSize:15}}>SUBMIT</Text>
         
          </TouchableHighlight>

          </LinearGradient>

          </View>

         </View>
         
       </Modal>


{/* //============================= EDIT POP-UP ==========================================// */}

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
   fontSize:12,
   color:'#ffffff',
   margin:3,
   fontWeight:'bold',
   justifyContent:'center',
   alignSelf:'center'
  },
  textStyle:
  {
    color:'#ffffff',
    fontSize:14,
  },
  imageArea:
  {
    marginHorizontal:5,
    marginVertical:5,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  userImages:
  {
   height: height(20), // 20% of height device screen
   width: width(28),
   marginHorizontal:8,

  },
  textPopUpHeading:
  {
    color:'#ffffff',
    fontSize:14,
    marginHorizontal:10,
  },
  textPopUpEdittext:
  {
    color:'#000000',
    fontSize:13,
    marginHorizontal:10,
    width:'90%',
  },
  viewPopUpEdittext:
  {
    marginTop:5,
    marginBottom:15,
    marginHorizontal:10,
    borderRadius:5,
    justifyContent:'center',
    backgroundColor:'#ffffff',
    height:"6%"
  },
  buttonBlack:
  {
    width: "95%",
    height: height(5),
    backgroundColor:'#000000',
    borderRadius:20,
    marginVertical:2,
    marginHorizontal:1
  },
});