import React from 'react';
import { Dimensions, View, Text, ScrollView, Image, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import style from './style'

let {height, width}= Dimensions.get("window");

export default class SelectClub extends React.Component{

    constructor(){
        super();
        this.state={
            searchKeyWord:""
        }
    }


    render(){
        return(
            <View style={style.container}>
                <ScrollView>
                    <View
                        style={style.imageContainer}
                    >
                        <Image
                            style={style.datSpotImage}
                            source={require("../../../assets/datSpotLogo.png")}
                            resizeMode={"contain"}
                        />
                    </View>
                    <View style={style.addYourClubTextContainer}>
                        <Text style={style.addYourClubTextLabel}>
                            Add your club
                        </Text>
                        <Text style={style.addYourClubText}>
                            Look for your club in the list and select it to proceed further.
                        </Text>
                    </View>
                    <View style={style.searchBarContainer}>
                        <View style={style.searchBarWrapper}>
                            <View style={style.searchIconContainer}>
                                <Feather color={"#000"} size={30} name={"search"}/>
                            </View>
                            <View style={style.searchInputContainer}>
                                <TextInput
                                    placeholder='Search by name'
                                    placeholderTextColor={"rgb(150,150,150)"}
                                    style={style.searchInput}
                                    underlineColorAndroid={"rgba(0,0,0,0)"}
                                    onChangeText={(data)=> {
                                        this.setState({searchKeyWord: data});
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}