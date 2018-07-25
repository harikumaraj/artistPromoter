import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Alert,
    Image,
    TouchableOpacity, Keyboard
} from 'react-native';

import style from './style';
import {connect} from "react-redux";
import { updateProfile } from "../../actions/profileAction";

class Category extends Component{

    constructor(){
        super();

    }

    updateUserDetails(accountType){

        console.log(this.props);

        fetch('https://datspot.com/api/auth', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:this.props.profile.jwtToken
            },
            body: JSON.stringify({
                "acc_type":accountType
            }),
        })
            .then(response => {
                const statusCode = response.status;
                const data = response.json();
                return Promise.all([statusCode, data]);
            })
            .then(([statusCode, data])=>{
                console.log(statusCode, data);
                this.setState({ loading: false, fetchFlag: false });
                if (statusCode === 200) {
                    this.props.updateProfile({account_type:accountType})
                }
                else{
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render()
    {
        return(
            <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>
                <View style={{flex:1,flexDirection:'column'}}>
                    <View style={{height:40,width:null}}/>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                        <Image
                            source={require('../images/logo.png')}
                            style={{height:150,width:150}}
                            resizeMode={"contain"}
                        />
                    </View>
                    <Text style={style.textHeading}>Which user type do you belong to</Text>
                    <View style={style.viewCategory}>
                        <TouchableOpacity
                            onPress={()=>{
                                this.updateUserDetails("artist");
                                this.props.navigation.navigate("ArtistSelectMusicType")
                            }}
                        >
                            <ImageBackground
                                source={require('../images/big_button.png')}
                                style={style.imageStyle}
                            >
                                <Text style={style.textCategory}>ARTIST</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                this.updateUserDetails("club");
                                this.props.navigation.navigate("ClubSelectMusicType");
                            }}
                        >
                            <ImageBackground
                                source={require('../images/big_button.png')}
                                style={style.imageStyle}
                            >
                                <Text style={style.textCategory}>CLUB</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>{
                                this.updateUserDetails("promoter");
                                this.props.navigation.navigate("PromoterSelectMusicType");
                            }}
                        >
                            <ImageBackground
                                source={require('../images/big_button.png')}
                                style={style.imageStyle}
                            >
                                <Text style={style.textCategory}>PROMOTER</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profile
    };
}

export default connect( mapStateToProps, { updateProfile })( Category );