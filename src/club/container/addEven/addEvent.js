import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Modal} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';
import { width, height} from 'react-native-dimension';

import Header from '../../../components/header/header';
import style from './style'

export default class addEvent extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            eventName:'',
            eventDesc:'',
            eventInTime:'',
            eventOutTime:'',
            eventTickets:'',
            eventBasic: '',
            eventBasicPrice:'',
            eventPremium:'',
            eventPremiumPrice:'',
            eventExclusive:'',
            eventExclusivePrice:'',
            eventCreated:false
        };
    }

    evenCreationDone(doneVisible)
    {
        this.setState({eventCreated:doneVisible});
    }

    render()
    {
        return(

            <View style={{flex:1,flexDirection:'column',backgroundColor:'#000000'}}>

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
                    middleText={ "ADD EVENT" }
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

                <ScrollView style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>

                    <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>

                        <Text style={styles.textMainHeading}>Please fill in the detail to add your club</Text>

                        <Text style={styles.textHeading}>Event Name</Text>
                        <View style={styles.viewEdittext}>
                            <TextInput style = {styles.textEdittext}
                                       onChangeText = {(eventName) => this.setState({eventName})}
                                       value = {this.state.eventName}
                                       underlineColorAndroid = 'rgba(0,0,0,0)'/>
                        </View>

                        <Text style={styles.textHeading}>Brief Description (max 100 words) </Text>
                        <View style={styles.viewDescription}>
                            <TextInput style = {styles.textEdittext}
                                       onChangeText = {(eventDesc) => this.setState({eventDesc})}
                                       value = {this.state.eventDesc}
                                       multiline={true}
                                       numberOfLines = {10}
                                       underlineColorAndroid = 'rgba(0,0,0,0)'/>
                        </View>
                        {/* //========================================= TIME ==============================================// */}
                        <Text style={styles.textHeading}>Event Timing</Text>

                        <View style={{flexDirection:'row',
                            marginBottom:15,
                            marginHorizontal:20,
                            justifyContent:'space-between',
                            height:"6%"}}>

                            <View style={styles.viewEdittextTime}
                                  flexBasis="40%">

                                <TextInput style = {styles.textEdittextTime}
                                           onChangeText = {(eventInTime) => this.setState({eventInTime})}
                                           value = {this.state.eventInTime}
                                           placeholder = "From"
                                           keyboardType='numeric'
                                           placeholderTextColor='#000000'
                                           underlineColorAndroid = 'rgba(0,0,0,0)'/>

                                <Image style={styles.imageClock}
                                       source={require('../../../containers/club/imagesClub/clock.png')}/>

                            </View>

                            <View style={styles.viewEdittextTime}
                                  flexBasis="40%">
                                <TextInput style = {styles.textEdittextTime}
                                           onChangeText = {(eventOutTime) => this.setState({eventOutTime})}
                                           value = {this.state.eventOutTime}
                                           placeholder = "To"
                                           keyboardType='numeric'
                                           placeholderTextColor='#000000'
                                           underlineColorAndroid = 'rgba(0,0,0,0)'/>

                                <Image style={styles.imageClock}
                                       source={require('../../../containers/club/imagesClub/clock.png')}/>
                            </View>

                        </View>
                        {/* //====================================== TIME ======================================================// */}
                        <Text style={styles.textHeading}>Available Tickets</Text>
                        <View style={styles.viewEdittext}>
                            <TextInput style = {styles.eventTickets}
                                       onChangeText = {(eventTickets) => this.setState({eventTickets})}
                                       value = {this.state.eventTickets}
                                       underlineColorAndroid = 'rgba(0,0,0,0)'/>
                        </View>
                        {/* //=============================== PRICE BASIC ==========================================================// */}
                        <View style={{flexDirection:'row',
                            marginBottom:15,
                            marginHorizontal:20,
                            justifyContent:'space-between'}}>

                            <View style={{flexDirection:'column'}}
                                  flexBasis="30%">

                                <Text style={styles.textPriceHeading}>Basic</Text>
                                <View style={styles.viewEdittextPrice}
                                      flexBasis="30%">

                                    <TextInput style = {styles.textEdittextTime}
                                               onChangeText = {(eventBasic) => this.setState({eventBasic})}
                                               value = {this.state.eventBasic}
                                               underlineColorAndroid = 'rgba(0,0,0,0)'/>
                                </View>
                            </View>


                            <View style={{flexDirection:'column'}}
                                  flexBasis="30%">

                                <Text style={styles.textPriceHeading}>Price/ticket</Text>
                                <View style={styles.viewEdittextPrice}
                                      flexBasis="30%">

                                    <TextInput style = {styles.textEdittextTime}
                                               onChangeText = {(eventBasicPrice) => this.setState({eventBasicPrice})}
                                               value = {this.state.eventBasicPrice}
                                               underlineColorAndroid = 'rgba(0,0,0,0)'/>
                                </View>
                            </View>

                        </View>
                        {/* //=============================== PRICE BASIC ==================================================// */}


                        {/* //=============================== PRICE PREMIUM ==========================================================// */}
                        <View style={{flexDirection:'row',
                            marginBottom:15,
                            marginHorizontal:20,
                            justifyContent:'space-between'}}>

                            <View style={{flexDirection:'column'}}
                                  flexBasis="30%">

                                <Text style={styles.textPriceHeading}>Premium</Text>
                                <View style={styles.viewEdittextPrice}
                                      flexBasis="30%">

                                    <TextInput style = {styles.textEdittextTime}
                                               onChangeText = {(eventPremium) => this.setState({eventPremium})}
                                               value = {this.state.eventPremium}
                                               underlineColorAndroid = 'rgba(0,0,0,0)'/>
                                </View>
                            </View>


                            <View style={{flexDirection:'column'}}
                                  flexBasis="30%">

                                <Text style={styles.textPriceHeading}>Price/ticket</Text>
                                <View style={styles.viewEdittextPrice}
                                      flexBasis="30%">

                                    <TextInput style = {styles.textEdittextTime}
                                               onChangeText = {(eventPremiumPrice) => this.setState({eventPremiumPrice})}
                                               value = {this.state.eventPremiumPrice}
                                               underlineColorAndroid = 'rgba(0,0,0,0)'/>
                                </View>
                            </View>

                        </View>
                        {/* //=============================== PRICE PREMIUM ==================================================// */}


                        {/* //=============================== PRICE EXCLUSIVE ==========================================================// */}
                        <View style={{flexDirection:'row',
                            marginBottom:15,
                            marginHorizontal:20,
                            justifyContent:'space-between'}}>

                            <View style={{flexDirection:'column'}}
                                  flexBasis="30%">

                                <Text style={styles.textPriceHeading}>Exclusive</Text>
                                <View style={styles.viewEdittextPrice}
                                      flexBasis="30%">

                                    <TextInput style = {styles.textEdittextTime}
                                               onChangeText = {(eventExclusive) => this.setState({eventExclusive})}
                                               value = {this.state.eventExclusive}
                                               underlineColorAndroid = 'rgba(0,0,0,0)'/>
                                </View>
                            </View>


                            <View style={{flexDirection:'column'}}
                                  flexBasis="30%">

                                <Text style={styles.textPriceHeading}>Price/ticket</Text>
                                <View style={styles.viewEdittextPrice}
                                      flexBasis="30%">

                                    <TextInput style = {styles.textEdittextTime}
                                               onChangeText = {(eventExclusivePrice) => this.setState({eventExclusivePrice})}
                                               value = {this.state.eventExclusivePrice}
                                               underlineColorAndroid = 'rgba(0,0,0,0)'/>
                                </View>
                            </View>

                        </View>
                        {/* //=============================== PRICE EXCLUSIVE==================================================// */}

                        {/* //=================================== ADD IMAGES =======================================================// */}

                        <Text style={styles.textHeading}>Images</Text>
                        <LinearGradient colors={['#FF41A8','#FFB847']}
                                        style={{width:"30%",
                                            borderRadius:20,
                                            alignItems:'center',
                                            marginTop:10,
                                            marginBottom:30,
                                            marginHorizontal:20,
                                            justifyContent:'center'}}>

                            <TouchableHighlight style={{
                                paddingHorizontal:10,
                                paddingVertical:8,
                                justifyContent:'center',
                                alignItems:'center'}}

                                                onPress = {this.functionAlert}>

                                <Text style={{color:'#ffffff',fontSize:15}}>ADD IMAGES</Text>

                            </TouchableHighlight>

                        </LinearGradient>

                        {/* //=================================== ADD IMAGES =======================================================// */}
                    </View>
                </ScrollView>

                <View style={{bottom:0,marginVertical:5,marginHorizontal:20,flexDirection:'row'}}>

                    <LinearGradient colors={['#FF41A8','#FFB847']}
                                    flexBasis="40%"
                                    style={{width:"50%",
                                        borderRadius:20,
                                        alignItems:'center',
                                        alignSelf:'center',
                                        marginHorizontal:20,
                                        marginVertical:5,
                                        justifyContent:'center'}}>

                        <View style={styles.buttonBlack}>

                            <TouchableHighlight style={{
                                paddingHorizontal:10,
                                paddingVertical:8,
                                justifyContent:'center',
                                alignItems:'center'}}

                                                onPress = {()=>{this.props.navigation.navigate("ClubEvent")}}>

                                <Text style={{color:'#ffffff',fontSize:15}}>BACK</Text>

                            </TouchableHighlight>

                        </View>

                    </LinearGradient>


                    <LinearGradient colors={['#FF41A8','#FFB847']}
                                    flexBasis="40%"
                                    style={{width:"50%",
                                        borderRadius:20,
                                        marginHorizontal:20,
                                        marginVertical:5,
                                        alignItems:'center',
                                        alignSelf:'center',
                                        justifyContent:'center'}}>

                        <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:8,
                            justifyContent:'center',
                            alignItems:'center'}}

                                            onPress = {() => {this.evenCreationDone(true)}}>

                            <Text style={{color:'#ffffff',fontSize:15}}>ADD</Text>

                        </TouchableHighlight>

                    </LinearGradient>

                </View>

                {/* //================================== POP UP =========================================// */}

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.eventCreated}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>

                    <View style={{flex:1, backgroundColor:"rgba(255,255,255,0.5)", alignItems:"center", justifyContent:"center"}}>
                        <View
                            style={{
                                height:"25%",
                            width:"70%",
                            flexDirection:'column',
                            backgroundColor:'#000000',
                            alignSelf:'center',
                            borderRadius:20,
                            }}
                        >
                            <Text style={{alignSelf:'center',
                                fontSize:15,
                                color:'#ffffff',
                                marginHorizontal:20,
                                marginTop:20,
                            }}>Event Created Successfully</Text>

                            <LinearGradient colors={['#FF41A8','#FFB847']}
                                            style={{width:"50%",
                                                borderRadius:20,
                                                marginHorizontal:10,
                                                marginTop:35,
                                                alignItems:'center',
                                                alignSelf:'center',
                                                justifyContent:'center'}}>

                                <TouchableOpacity style={{
                                    paddingHorizontal:10,
                                    paddingVertical:8,
                                    justifyContent:'center',
                                    alignItems:'center'}}

                                                    onPress = {() => {this.evenCreationDone(false)}}>

                                    <Text style={{color:'#ffffff',fontSize:15}}>DONE</Text>

                                </TouchableOpacity>

                            </LinearGradient>

                        </View>
                    </View>

                </Modal>


                {/* //================================== POP UP =========================================// */}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textMainHeading:
        {
            color:'#ffffff',
            fontSize:15,
            marginHorizontal:20,
            alignSelf:'center',
            marginBottom:20,
            marginTop:10
        },
    textHeading:
        {
            color:'#ffffff',
            fontSize:14,
            marginHorizontal:20,
        },
    textEdittext:
        {
            color:'#000000',
            fontSize:13,
            marginHorizontal:10,
            width:'90%',
        },
    viewEdittext:
        {
            marginTop:5,
            marginBottom:15,
            marginHorizontal:20,
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:'#ffffff',
            height:"6%"
        },
    viewDescription:
        {
            marginTop:5,
            marginBottom:15,
            marginHorizontal:20,
            borderRadius:10,
            backgroundColor:'#ffffff'
        },
    viewEdittextTime:
        {
            marginTop:5,
            borderRadius:10,
            justifyContent:'space-between',
            backgroundColor:'#ffffff',
            flexDirection:'row'
        },
    textEdittextTime:
        {
            color:'#000000',
            fontSize:13,
            width:'50%',
            marginHorizontal:5,
        },
    imageClock:
        {
            width: 24,
            height: 24,
            marginRight:10,
            alignSelf:'center'
        },
    textPriceHeading:
        {
            color:'#ffffff',
            fontSize:14,
        },
    viewEdittextPrice:
        {
            marginTop:5,
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:'#ffffff',
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