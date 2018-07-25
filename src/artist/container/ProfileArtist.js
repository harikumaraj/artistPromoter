import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    Image,
    TouchableHighlight,
    ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { width, height, totalSize } from 'react-native-dimension';
import Header from '../../components/header/header';
import Feather from 'react-native-vector-icons/Feather';

export default class Profile extends Component {

    componentDidMount(){

    }

    drawerToggle=(()=>{
        console.log(this.props);
        this.props.navigation.toggleDrawer();
    }).bind(this);

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
                    middleText={ "PROFILE" }
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

                    <View style={{flexDirection:'row',
                        margin:10}}>

                        <View style={{flexDirection:'row',
                            marginTop:10,
                            marginHorizontal:5,
                            marginBottom:5}}
                              flexBasis="50%">

                            <Image style={styles.imageCircle}
                                   source={require('../../containers/images/d1.jpeg')}
                                   flexBasis="35%"/>

                            <View style={{flexDirection:'column',
                                marginLeft:10}}
                                  flexBasis="65%">

                                <Text style={{color:'#ffffff',fontSize:14}}>John Owens</Text>
                                <Text style={styles.textStyle}>1k followers</Text>
                            </View>

                        </View>

                        <View style={{height:45,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            margin:5}}
                              flexBasis="45%">

                            <Text style={styles.capsulText}>DJ</Text>
                            <Text style={styles.capsulText}>JAZZ</Text>
                            <Text style={styles.capsulText}>ROCK</Text>

                        </View>
                    </View>

                    <View style={{marginHorizontal:5}}>

                        <Text style={{color:'#ffffff',fontSize:14,margin:8}}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>

                    </View>

                    <View style={styles.imageArea}>

                        <Image style={styles.userImages}
                               source={require('../../containers/images/d2.jpeg')}/>

                        <Image style={styles.userImages}
                               source={require('../../containers/images/d3.jpeg')}/>

                        <Image style={styles.userImages}
                               source={require('../../containers/images/d4.jpeg')}/>

                    </View>

                    <View style={styles.imageArea}>

                        <Image style={styles.userImages}
                               source={require('../../containers/images/d5.jpeg')}/>

                        <Image style={styles.userImages}
                               source={require('../../containers/images/d6.jpeg')}/>

                        <Image style={styles.userImages}
                               source={require('../../containers/images/d1.jpeg')}/>

                    </View>

                    <Text style={{color:'#FF41A8',
                        textAlign:'center',
                        padding:5,
                        fontSize:15}}>View All</Text>

                    <Text style={{color:'#ffffff',
                        marginTop:10,
                        marginHorizontal:8,
                        fontWeight:'bold',
                        fontSize:16}}>Social Connect</Text>

                    <View style={{flexDirection:'row',
                        width:null,
                        justifyContent:'space-between',
                        marginTop:10,
                        marginHorizontal:8}}>

                        <Text style={{color:'#ffffff',
                            fontSize:15}}>Facebook</Text>

                        <Text style={{color:'#ffffff',
                            alignSelf:'flex-end',
                            paddingHorizontal:10,
                            fontSize:15}}>Synced</Text>
                    </View>

                    <View style={{flexDirection:'row',
                        width:null,
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginTop:10,
                        marginHorizontal:8,}}>

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
                            >

                                <Text style={{color:'#ffffff',fontSize:15}}>Sync</Text>

                            </TouchableHighlight>
                        </LinearGradient>

                    </View>

                    <LinearGradient colors={['#FF41A8','#FFB847']}
                                    style={{width:"50%",
                                        borderBottomLeftRadius:20,
                                        borderBottomRightRadius:20,
                                        borderTopLeftRadius:20,
                                        borderTopRightRadius:20,
                                        marginTop:30,
                                        alignItems:'center',
                                        alignSelf:'center',
                                        justifyContent:'center'}}>

                        <TouchableHighlight style={{
                            paddingHorizontal:20,
                            paddingVertical:10,
                            justifyContent:'center',
                            alignItems:'center'}}
                        >

                            <Text style={{color:'#ffffff',fontSize:15}}>Signout</Text>

                        </TouchableHighlight>
                    </LinearGradient>

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

        }
});