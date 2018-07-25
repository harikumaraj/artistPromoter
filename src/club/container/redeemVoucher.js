import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        Alert,
        Image,
        TextInput,
        TouchableHighlight,
        Modal} from 'react-native';
import {Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export default class redeemVoucher extends Component {

    functionImage()
    {
        <Image style={{justifyContent:'center'}}
               source={require('../../containers/club/imagesClub/notification.png')}/>
    }

    voucherRedeem(doneVisible)
    {
      this.setState({redeem:doneVisible});
    }

    functionAlert()
    {
        Alert.alert("This is alert");
    }

    constructor(props)
    {
        super(props);
        this.state= {
            amount:'',
            redeem:false
        };
    }


    render()
    {
        return(
            <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>

            <Header
              backgroundColor='#000000'
              outerContainerStyles={{borderBottomWidth:0}}
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'REDEEM VOUCHER', style: {fontSize:16,
                                                                 color:'#ffffff',
                                                                 fontWeight:'bold'} }}
              rightComponent={this.functionImage()}/>

              <View style={styles.viewEdittext}>

              <TextInput style = {styles.textEdittext}
                     onChangeText = {(amount) => this.setState({amount})}
                     value = {this.state.amount}
                     placeholder={'Total Bill Amount'}
                     underlineColorAndroid = 'rgba(0,0,0,0)'/>

              </View>

              <View style={styles.viewGrey}/>

              <View style={styles.buttonView}>

                <LinearGradient colors={['#FF41A8','#FFB847']} 
                                style={styles.gradientView}>

                <TouchableHighlight style={{justifyContent:'center'}}
                                                
                 onPress = {() => {this.voucherRedeem(true)}}>
                        
                <Text style={{color:'#ffffff',fontSize:15}}>VALIDATE VOUCHER</Text>
                        
                </TouchableHighlight>

                </LinearGradient>

              </View>

{/* //================================== POP UP =========================================// */}

            <Modal
                animationType="fade"
                transparent={false}
                visible={this.state.redeem}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>

                <View style={styles.modalView}>

                <Text style={styles.modalTextView}>Voucher Added successfully</Text>
                <Text style={{color:'#ffffff',
                              fontSize:14,
                              marginHorizontal:20,
                              marginTop:10}}>
                
                You have successfully redeemded the voucher to get 10% discount on the total amount</Text>

            <LinearGradient colors={['#FF41A8','#FFB847']}
                                style={{width:"50%",
                                borderRadius:20,
                                marginHorizontal:10, 
                                marginTop:25,    
                                alignItems:'center',
                                alignSelf:'center',
                                justifyContent:'center'}}>

                <TouchableHighlight style={{justifyContent:'center',marginVertical:10}}
                                                    
                onPress = {() => {this.voucherRedeem(false)}}>
            
                <Text style={{color:'#ffffff',fontSize:15}}>DONE</Text>
                
                </TouchableHighlight>

                </LinearGradient>

                </View>

        </Modal>


{/* //================================== POP UP =========================================// */}

            </View>
        );
    }
}

const styles = StyleSheet.create({

    textEdittext:
    {
      color:'#000000',
      fontSize:15,
      marginLeft:10,
      width:'90%',
    },
    viewEdittext:
  {
    marginVertical:10,
    marginHorizontal:20,
    borderRadius:10,
    justifyContent:'center',
    backgroundColor:'#ffffff',
  },
  viewGrey:
  {
      height:"50%",
      backgroundColor:'#666666',
      borderRadius:10,
      marginHorizontal:20
  },
  buttonView:
  {
    width:"100%",
    position:'absolute',
    bottom:0,
    padding:10,
    justifyContent:'center'
  },
  gradientView:
  {
    borderRadius:20,
    marginHorizontal:20,  
    paddingVertical:10,  
    paddingHorizontal:20, 
    justifyContent:'center',
    alignSelf:'center'
  },
  modalView:
  {
      height:"30%",
      width:"70%",
      flexDirection:'column',
      backgroundColor:'#000000',
      alignSelf:'center',
      borderRadius:20,
      position:'absolute',
      top:"15%",
      bottom:0,
      left:"15%",
      right:0
  },
  modalTextView:
  {
      alignSelf:'center',
      fontSize:15,
      color:'#ffffff',
      marginHorizontal:20,
      marginTop:20,
  }

});