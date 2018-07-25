import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class clubHome extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            search:''
        };
    }

    functionAlert()
    {
        Alert.alert("alert","This is alert");
    }

    render()
    {
        return(

            <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>
                <ScrollView style={{flex:1,backgroundColor:'#000000'}}>

                    <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>

                        <Image source={require('../../containers/club/imagesClub/logo.jpg')}
                               flexBasis="100%"
                               style={{height:120,
                                   width:120,
                                   alignSelf:'center',
                                   marginTop:30}}/>

                        <Text style={styles.textHeading}>Add your club</Text>
                        <Text style={styles.textSubhead}>Look for your club in the list and
                            select it to proceed further.</Text>

                        <View style={styles.searchBar}>

                            <TextInput style = {styles.textSearch}
                                       onChangeText = {(search) => this.setState({search})}
                                       value = {this.state.search}
                                       underlineColorAndroid = 'rgba(0,0,0,0)'
                                       placeholder = "Search by name"
                                       placeholderTextColor='#585858'/>

                        </View>

                        <View style={styles.viewClub}>

                            <View style={{flexDirection:'column'}}
                                  flexBasis="50%">

                                <Text style={styles.textClubName}>London Club</Text>
                                <Text style={styles.textClubInfo}>Jazz Rock, Live Music</Text>
                                <Text style={styles.textClubInfo}>Street number 25</Text>

                            </View>

                            <LinearGradient colors={['#FF41A8','#FFB847']}
                                            style={{width:"40%",
                                                borderRadius:20,
                                                alignItems:'center',
                                                alignSelf:'center',
                                                justifyContent:'center'}}>

                                <TouchableHighlight style={{
                                    paddingHorizontal:10,
                                    paddingVertical:8,
                                    justifyContent:'center',
                                    alignItems:'center'}}

                                                    onPress = {this.functionAlert}>

                                    <Text style={{color:'#ffffff',fontSize:15}}>Follow</Text>

                                </TouchableHighlight>

                            </LinearGradient>
                        </View>

                        <View style={{marginVertical:15}}>

                            <Text style={styles.textHeading}>Couldn't find?</Text>
                            <Text style={styles.textSubhead}>Look for your club in the list and
                                select it to proceed further.</Text>

                            <LinearGradient colors={['#FF41A8','#FFB847']}
                                            style={{width:"50%",
                                                borderRadius:20,
                                                alignItems:'center',
                                                alignSelf:'center',
                                                marginVertical:15,
                                                justifyContent:'center'}}>

                                <TouchableHighlight
                                    style={{
                                        paddingHorizontal:10,
                                        paddingVertical:8,
                                        justifyContent:'center',
                                        alignItems:'center'
                                    }}
                                >
                                    <Text style={{color:'#ffffff',fontSize:15}}>Add Club</Text>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                    </View>
                </ScrollView>
                <View style={{bottom:0,marginHorizontal:20,marginVertical:10}}>
                    <LinearGradient
                        colors={['#FF41A8','#FFB847']}
                        style={{
                            width:"80%",
                            borderRadius:20,
                            alignItems:'center',
                            alignSelf:'center',
                            marginVertical:10,
                            justifyContent:'center'
                        }}
                    >
                        <TouchableHighlight
                            style={{
                                paddingHorizontal:10,
                                paddingVertical:8,
                                justifyContent:'center',
                                alignItems:'center'
                            }}
                            onPress = {()=>{
                                this.props.navigation.navigate("ClubAddScreen");
                            }}
                        >
                            <Text style={{color:'#ffffff',fontSize:15}}>PROCEED</Text>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textHeading:
        {
            color:'#ffffff',
            fontSize:22,
            alignSelf:'center',
            marginTop:20,
        },
    textSubhead:
        {
            color:'#ffffff',
            fontSize:16,
            textAlign:'center',
            marginTop:5,
            marginHorizontal:40
        },
    searchBar:
        {
            marginTop:20,
            marginBottom:15,
            marginHorizontal:30,
            borderRadius:30,
            justifyContent:'center',
            backgroundColor:'#ffffff'
        },
    textSearch:
        {
            width:'90%',
            color:'#000000',
            fontSize:14,
            marginHorizontal:10,
            borderColor:'white',
        },
    viewClub:
        {
            flexDirection:'row',
            marginBottom:10,
            marginHorizontal:20,
            padding:5,
            justifyContent:'space-between',
            borderRadius:5,
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
            fontSize:13,
            marginHorizontal:8,
            marginTop:5
        }

});