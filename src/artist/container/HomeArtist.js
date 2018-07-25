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
import Header from '../../components/header/header';
import Feather from 'react-native-vector-icons/Feather'
import HomeFollowAll from './HomeFollowAll';


export default class FollowList extends Component{


    render()
    {
        return(
            <ScrollView style={{flex:1,backgroundColor:'#000000'}}>

                {/* {(this.state.addNewPostPopUp===true)?<AddNewPost data={this.state.posts[0]}/>:null}
        {(this.state.postDetailsPopUp===true)?<PostDetail data={this.state.posts[0]}/>:null} */}
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
                    middleText={ "HOME" }
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

                <View style={{flex:1,flexDirection:'column',backgroundColor:'#000000',marginBottom:15}}>

                    <Text style={styles.textSuggestion}>Suggestion just for you</Text>
                    <Text style={styles.textInfo}>Based on your choices, here are some</Text>
                    <Text style={styles.textInfo}>suggestions for you. We recommend following</Text>
                    <Text style={styles.textInfo}>all of them.</Text>

                    <LinearGradient colors={['#FF41A8','#FFB847']}
                                    style={{width:"40%",
                                        borderBottomLeftRadius:20,
                                        borderBottomRightRadius:20,
                                        borderTopLeftRadius:20,
                                        borderTopRightRadius:20,
                                        marginTop:20,
                                        alignItems:'center',
                                        alignSelf:'center',
                                        justifyContent:'center'}}>

                        <TouchableHighlight style={{
                            paddingHorizontal:10,
                            paddingVertical:10,
                            justifyContent:'center',
                            alignItems:'center'}}

                                            onPress = {() =>{}}>

                            <Text style={{color:'#ffffff',fontSize:15}}>Follow all</Text>

                        </TouchableHighlight>

                    </LinearGradient>

                    <View style={styles.viewClub}>

                        <View style={{flexDirection:'column'}}
                              flexBasis="50%">

                            <Text style={styles.textClubName}>London Club</Text>
                            <Text style={styles.textClubInfo}>Jazz Rock, Live Music</Text>
                            <Text style={styles.textClubInfo}>Street number 25</Text>

                        </View>

                        <LinearGradient colors={['#FF41A8','#FFB847']}
                                        style={{width:"40%",
                                            borderBottomLeftRadius:20,
                                            borderBottomRightRadius:20,
                                            borderTopLeftRadius:20,
                                            borderTopRightRadius:20,
                                            alignItems:'center',
                                            alignSelf:'center',
                                            justifyContent:'center'}}>

                            <TouchableHighlight style={{
                                paddingHorizontal:10,
                                paddingVertical:8,
                                justifyContent:'center',
                                alignItems:'center'}}

                                                onPress = {() =>{}}
                            >

                                <Text style={{color:'#ffffff',fontSize:15}}>Follow</Text>

                            </TouchableHighlight>

                        </LinearGradient>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    textSuggestion:
        {
            color:'#ffffff',
            fontSize:22,
            alignSelf:'center',
            fontWeight:'bold',
            marginVertical:8
        },
    textInfo:
        {
            color:'#ffffff',
            fontSize:14,
            alignSelf:'center',
            marginTop:5
        },
    viewClub:
        {
            flexDirection:'row',
            marginVertical:20,
            marginHorizontal:20,
            padding:5,
            justifyContent:'space-between',
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            elevation:3,
            borderColor: '#ffffff',
            borderWidth:1
        },
    textClubName:
        {
            color:'#ffffff',
            fontSize:14,
            marginHorizontal:8,
            fontWeight:'bold',
        },
    textClubInfo:
        {
            color:'#ffffff',
            fontSize:14,
            marginHorizontal:8,
            marginTop:5
        }

});

const RootStack = StackNavigator({

        FollowHome: {
            screen: FollowList,
            navigationOptions:
                {
                    header:null
                }
        },
        FollowAll: {
            screen: HomeFollowAll,
            navigationOptions:
                {
                    header:null
                }
        }
    },
    {
        initialRouteName: 'FollowHome',
    }
);
 