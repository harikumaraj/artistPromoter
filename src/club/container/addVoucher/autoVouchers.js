import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    Image,
    TouchableHighlight,
    Modal} from 'react-native';
import {Slider} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { width, height} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Header from '../../../components/header/header';
import style from "./style";

export default class autoVouchers extends Component {

    functionImage()
    {
        return <Image
            style={{justifyContent:'center'}}
            source={require('../../../containers/club/imagesClub/notification.png')}
        />
    }

    addVoucher(doneVisible)
    {
        this.setState({voucherAdded:doneVisible});
    }

    constructor(props)
    {
        super(props);
        this.state= {
            value:0,
            voucherAdded:false
        };
    }


    render()
    {

        let data = [{
            value: 'All',
        }, {
            value: 'Food',
        }, {
            value: 'Drink',
        }];

        return(
            <View style={{backgroundColor:'#000000',flex:1}}>

                <Header
                    onPressLeftButton={()=>{
                        this.drawerToggle();
                    }}
                    leftIcon={ () => <View style={style.headerIconContainer}>
                        <SimpleLineIcons
                            name="menu"
                            size={25}
                            style={{color:"#ffffff"}}
                        />
                    </View>}
                    middleText={ "ADD VOUCHER" }
                    onPressRightButton={()=>{
                        this.drawerToggle();
                    }}
                    rightIcon={ () => <View style={style.headerIconContainer}>
                        <View style={style.notificationCountContainer}>
                            <Text style={{color:"rgb(255,65,168)", fontSize:10}}>3</Text>
                        </View>
                        <Image resizeMode={"contain"} style={style.notificationIcon} source={require("../../../assets/notificationBell.png")}/>
                    </View> }
                />
                <Text style={styles.textHeading}>Select discounted items</Text>
                <Dropdown
                    label= ""
                    data={data}
                    baseColor={'#000000'}
                    itemColor={'#585858'}
                    selectedItemColor={'#000000'}
                    containerStyle={styles.dropdownView}
                    pickerStyle={styles.pickerView}
                    overlayStyle={styles.overlayView}
                    dropdownPosition={0}
                    dropdownOffset={{top:10,left:0}}/>

                <Text style={styles.textHeading}>How much discount are you offering?</Text>
                <View style={styles.sliderView}>

                    <Text style={styles.textValue}
                          flexBasis="40%">{this.state.value}</Text>

                    <Slider
                        style={{alignSelf:'center'}}
                        value={this.state.value}
                        onValueChange={(value) => this.setState({value})}
                        maximumValue={100}
                        minimumValue={0}
                        thumbTintColor={'#FF41A8'}
                        flexBasis="60%"/>

                </View>

                {/* //===========================VOUCHER DATE===============================================// */}
                <Text style={styles.textHeading}>Voucher Dates?</Text>
                <View style={{flexDirection:'row',marginHorizontal:20}}>

                    <View style={[styles.dateView,{marginRight:5}]}>

                        <Text style={styles.textValue}
                              flexBasis="40%">From</Text>

                        <Image style={{justifyContent:'center',alignSelf:'flex-end'}}
                               source={require('../../../containers/club/imagesClub/calendar.png')}/>

                    </View>

                    <View style={[styles.dateView,{marginRight:5}]}>

                        <Text style={styles.textValue}
                              flexBasis="40%">To</Text>

                        <Image style={{justifyContent:'center',alignSelf:'flex-end'}}
                               source={require('../../../containers/club/imagesClub/calendar.png')}/>
                    </View>

                </View>
                {/* //===========================VOUCHER DATE===============================================// */}

                {/* //===========================BuTTONS===============================================// */}

                <View style={styles.viewButton}>

                    <LinearGradient colors={['#FF41A8','#FFB847']}
                                    flexBasis="45%"
                                    style={[styles.gradientStyle,styles.borderCheck]}>

                        <View style={styles.buttonBlack}>

                            <TouchableHighlight style={{ justifyContent:'center', alignItems:'center'}}

                                                onPress = {()=>{}}>

                                <Text style={{color:'#ffffff',fontSize:15}}>CANCEL</Text>

                            </TouchableHighlight>

                        </View>

                    </LinearGradient>

                    <LinearGradient colors={['#FF41A8','#FFB847']}
                                    flexBasis="45%"
                                    style={[styles.gradientStyle,{marginLeft:20}]}>

                        <TouchableHighlight style={{justifyContent:'center'}}

                                            onPress = {() => {this.addVoucher(true)}}>

                            <Text style={{color:'#ffffff',fontSize:15}}>PROMOTE</Text>

                        </TouchableHighlight>

                    </LinearGradient>

                </View>

                {/* //===========================BuTTONS===============================================// */}

                {/* //================================== POP UP =========================================// */}

                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.voucherAdded}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>

                    <View style={styles.modalView}>

                        <Text style={styles.modalTextView}>Auto Voucher added successfully</Text>

                        <LinearGradient colors={['#FF41A8','#FFB847']}
                                        style={{width:"50%",
                                            borderRadius:20,
                                            marginHorizontal:10,
                                            marginTop:35,
                                            alignItems:'center',
                                            alignSelf:'center',
                                            justifyContent:'center'}}>

                            <TouchableHighlight style={{justifyContent:'center',marginVertical:10}}

                                                onPress = {() => {this.addVoucher(false)}}>

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

    textHeading:
        {
            color:'#ffffff',
            fontSize:15,
            marginTop:15,
            marginHorizontal:20,
            marginBottom:5
        },
    dropdownView:
        {
            backgroundColor:'#ffffff',
            borderRadius:10,
            paddingHorizontal:10,
            marginHorizontal:20,
            justifyContent:'center',

        },
    borderCheck:
        {
            borderWidth:2,
            borderColor:'orange'
        },
    borderCheckRed:
        {
            borderWidth:2,
            borderColor:'red'
        },
    sliderView:
        {
            backgroundColor:'#ffffff',
            borderRadius:10,
            paddingHorizontal:10,
            paddingVertical:5,
            justifyContent:'space-between',
            marginHorizontal:20,
            flexDirection:'row'
        },
    overlayView:
        {
            marginTop:20,
            marginHorizontal:15
        },
    dateView:
        {
            backgroundColor:'#ffffff',
            flexBasis:"50%",
            padding:10,
            borderRadius:10,
            flexDirection:'row',
            justifyContent:'space-between'
        },
    textValue:
        {
            fontSize:15,color:'#585858',
            marginHorizontal:5,
            alignSelf:'center',
            fontWeight:'bold'
        },
    viewButton:
        {
            width:null,
            position:'absolute',
            bottom:0,
            flexDirection:'row',
            justifyContent:'space-between',
            marginHorizontal:10,
            alignSelf:'center'
        },
    gradientStyle:
        {
            width:"50%",
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center'
        },
    buttonBlack:
        {
            width: "97%",
            height: height(5),
            backgroundColor:'#000000',
            borderRadius:20,
            justifyContent:'center'
        },
    modalView:
        {
            height:"25%",
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


