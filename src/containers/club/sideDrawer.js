import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        } from 'react-native';
import {NavigationActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { width, height} from 'react-native-dimension';


  export default class sideDrawer extends Component{

    navigateToScreen = (route) => () => {
      const navigateAction = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigateAction);
    }

      render()
      {
        return(
          <View style={{flex:1,flexDirection:'column'}}>
            <LinearGradient colors={['#FF41A8','#FFB847']} 
                      style={{
                      height:"100%",
                      width:"100%",
                      justifyContent:'flex-start'}}>
            
            <View style={{flexDirection:'column',marginHorizontal:20,marginVertical:20}}>

              <View style={{flexDirection:'row'}}>

               <Image style={styles.imageCircle}
                      source={require('./imagesClub/d1.jpeg')}
                      flexBasis="30%"/> 

               <View style={{flexDirection:'column',
                            marginLeft:10,
                            marginTop:10}}
                            flexBasis="70%">

                <Text style={{color:'#ffffff',fontSize:14}}>John Owens</Text>
                <Text style={{color:'#ffffff',fontSize:12}}>View Profile</Text>

              </View>

              </View>
              
              <Text style={styles.textBlack}>CATEGORIES</Text>

              <Text style={styles.textWhite}
               onPress={this.navigateToScreen('addEventScreen')}>Create Events</Text>
              <View style={styles.blackLine}/>

              {/* <Text style={styles.textWhite}>Create Geo-Filtes</Text>
              <View style={styles.blackLine}/> */}

              <Text style={styles.textWhite}>Create Moment-Filters</Text>
              <View style={styles.blackLine}/>

              <Text style={styles.textWhite}
              onPress={this.navigateToScreen('autoVoucherScreen')}>Create Auto-Vouchers</Text>
              <View style={styles.blackLine}/>

              <Text style={styles.textWhite}
               onPress={this.navigateToScreen('redeemVoucherScreen')}>Redeem Vouchers</Text>
              <View style={styles.blackLine}/>

              <Text style={styles.textWhite}>Message</Text>

              <Text style={styles.textBlack}>LOGOUT</Text>

            </View>
            
           </LinearGradient>

          </View>
        );
      }
  }

  const styles = StyleSheet.create({

    imageCircle:
    {
       height: 70,
       width: 70,
       borderRadius: 35,
    },
    userImages:
    {
     height: height(20), // 20% of height device screen
     width: width(28),
     marginHorizontal:8,
 
    },
    textBlack:
    {
      color:'#000000',
      fontSize:15,
      marginTop:20,
      marginLeft:10,
      fontWeight:'bold'
    },
    textWhite:
    {
      color:'#ffffff',
      fontSize:14,
      marginLeft:15,
      paddingVertical:8
    },
    blackLine:
    {
      backgroundColor:'#000000',
      height:2,
      width:"60%",
      marginLeft:10
    }
 });
  