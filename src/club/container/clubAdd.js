import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView,
    Modal} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from 'react-native-elements'
import { width, height} from 'react-native-dimension';


export default class clubAdd extends Component{

    constructor(props)
    {
        super(props);
        this.state= {
            clubName:'',
            atmosphere:'',
            location:'',
            contactNumber:'',
            checked:false,
            addClub: false,
            popUpClubName:'',
            popUpEmail:'',
            popUpMsg:'',
            addClubDone:false,
        };
    }

    addClubFunction(visible)
    {
        this.setState({addClub:visible});
    }

    clubSubmitDone(doneVisible)
    {
        this.setState({addClubDone:doneVisible});
    }

    functionAlert()
    {
        Alert.alert("alert","This is alert");
    }


    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'#000000',flexDirection:'column'}}>
                <ScrollView>
                    <View>
                        <Image
                            source={require('../../assets/datSpotLogo.png')}
                            style={{
                                height:120,
                                width:120,
                                alignSelf:'center',
                                marginTop:30,
                                backgroundColor:"#000"
                            }}
                            resizeMode={"contain"}
                        />
                        <Text style={styles.textTitle}>Add club manually</Text>
                        <Text style={styles.textSubhead}>Please fill in the details to add your club</Text>
                        <View style={{width:null,height:30}}/>
                        <Text style={styles.textHeading}>Club Name</Text>
                        <View style={styles.viewEditText}>
                            <TextInput
                                style = {styles.textEditText}
                                onChangeText = {(clubName) => this.setState({clubName})}
                                value = {this.state.clubName}
                                underlineColorAndroid = 'rgba(0,0,0,0)'
                            />
                        </View>
                        <Text style={styles.textHeading}>Atmosphere</Text>
                        <View style={styles.viewEditText}>
                            <TextInput
                                style = {styles.textEditText}
                                onChangeText = {(atmosphere) => this.setState({atmosphere})}
                                value = {this.state.atmosphere}
                                underlineColorAndroid = 'rgba(0,0,0,0)'
                            />
                        </View>
                        <Text style={styles.textHeading}>Location</Text>
                        <View style={styles.viewEditText}>
                            <TextInput
                                style = {styles.textEditText}
                                onChangeText = {(location) => this.setState({location})}
                                value = {this.state.location}
                                underlineColorAndroid = 'rgba(0,0,0,0)'
                            />
                        </View>
                        <Text style={styles.textHeading}>Contact Number</Text>
                        <View style={styles.viewEditText}>
                            <TextInput
                                style = {styles.textEditText}
                                onChangeText = {(contactNumber) => this.setState({contactNumber})}
                                value = {this.state.contactNumber}
                                underlineColorAndroid = 'rgba(0,0,0,0)'
                            />
                        </View>
                        <Text style={styles.textHeading}>Images</Text>
                        <LinearGradient
                            colors={['#FF41A8','#FFB847']}
                            style={{
                                width:"30%",
                                borderRadius:20,
                                alignItems:'center',
                                marginVertical:10,
                                marginHorizontal:20,
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

                                onPress = {this.functionAlert}
                            >
                                <Text style={{color:'#ffffff',fontSize:15}}>ADD IMAGES</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                        <View style={{marginHorizontal:15,marginBottom:15}}>
                            <CheckBox
                                size={28}
                                title='Click Here'
                                checked={this.state.checked}
                                containerStyle={{backgroundColor:'#000000',borderColor:'#000000'}}
                                textStyle={{color:'#ffffff',fontSize:12}}
                                checkedColor='#ffffff'
                                onPress={() => this.setState({checked: !this.state.checked})}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View style={{bottom:0,marginVertical:5,marginHorizontal:20,flexDirection:'row'}}>
                    <LinearGradient
                        colors={['#FF41A8','#FFB847']}
                        flexBasis="40%"
                        style={{
                            width:"50%",
                            borderRadius:20,
                            alignItems:'center',
                            alignSelf:'center',
                            marginHorizontal:20,
                            marginVertical:5,
                            justifyContent:'center'
                        }}
                    >
                        <View style={styles.buttonBlack}>
                            <TouchableHighlight
                                style={{
                                    paddingHorizontal:10,
                                    paddingVertical:8,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}

                                onPress = {this.functionAlert}
                            >
                                <Text style={{color:'#ffffff',fontSize:15}}>BACK</Text>
                            </TouchableHighlight>
                        </View>
                    </LinearGradient>
                    <LinearGradient
                        colors={['#FF41A8','#FFB847']}
                        flexBasis="40%"
                        style={{width:"50%",
                            borderRadius:20,
                            marginHorizontal:20,
                            marginVertical:5,
                            alignItems:'center',
                            alignSelf:'center',
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
                            onPress = {() => {
                                this.clubSubmitDone(true);
                            }}
                        >
                            <Text style={{color:'#ffffff',fontSize:15}}>ADD CLUB</Text>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>

                {/* //========================POP UP ======================================// */}
                {/* //========================POP UP======================================// */}
                {/*onPress = {() => {this.addClubFunction(false)}}
                    {onPress = () => {this.clubSubmitDone(true)}*/}
                {/* //========================POP UP DONE======================================// */}

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.addClubDone}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <View style={{flex:1, backgroundColor:"rgba(255,255,255,0.5)", alignItems:"center", justifyContent:"center"}}>
                    <View
                        style={{
                            height:"35%",
                            width:"70%",
                            flexDirection:'column',
                            backgroundColor:'#000000',
                            borderRadius:20
                        }}
                    >
                        <Text
                            style={{
                                alignSelf:'center',
                                fontSize:15,
                                color:'#ffffff',
                                marginHorizontal:20,
                                marginTop:20,
                            }}
                        >
                            Club Added Successfully
                        </Text>
                        <Text
                            style={{
                                alignSelf:'center',
                                fontSize:13,
                                color:'#ffffff',
                                marginHorizontal:20,
                                marginTop:20,
                            }}
                        >
                            Your club has been added in the Datspot database.
                            Now you can go ahead and shout out about your events to the people
                        </Text>
                        <LinearGradient
                            colors={['#FF41A8','#FFB847']}
                            style={{width:"50%",
                                borderRadius:20,
                                marginHorizontal:10,
                                marginTop:20,
                                alignItems:'center',
                                alignSelf:'center',
                                justifyContent:'center'}}
                        >
                            <TouchableHighlight
                                style={{
                                    paddingHorizontal:10,
                                    paddingVertical:8,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                                onPress = {() => {
                                    this.props.navigation.navigate("clubNavigator");
                                    this.clubSubmitDone(false);
                                }}
                            >
                                <Text style={{color:'#ffffff',fontSize:15}}>DONE</Text>
                            </TouchableHighlight>
                        </LinearGradient>
                    </View>
                    </View>
                </Modal>

                {/* //========================POP UP DONE======================================// */}

            </View>
        );
    }
}

const styles = StyleSheet.create({

    textTitle:
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
    textHeading:
        {
            color:'#ffffff',
            fontSize:14,
            marginHorizontal:20,
        },
    textEditText:
        {
            color:'#000000',
            fontSize:13,
            marginHorizontal:10,
            width:'90%',
        },
    viewEditText:
        {
            marginTop:5,
            marginBottom:15,
            marginHorizontal:20,
            borderRadius:10,
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
    textPopUpHeading:
        {
            color:'#ffffff',
            fontSize:14,
            marginHorizontal:10,
        },
    textPopUpEditText:
        {
            color:'#000000',
            fontSize:13,
            marginHorizontal:10,
            width:'90%',
        },
    viewPopUpEditText:
        {
            marginTop:5,
            marginBottom:15,
            marginHorizontal:10,
            borderRadius:5,
            justifyContent:'center',
            backgroundColor:'#ffffff',
            height:"6%"
        },
    viewPopUpMessage:
        {
            marginTop:5,
            marginBottom:15,
            marginHorizontal:10,
            borderRadius:5,
            justifyContent:'center',
            backgroundColor:'#ffffff',
        },

});