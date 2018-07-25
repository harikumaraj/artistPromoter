import React from 'react';
import { View, Text, Image, Dimensions, Modal, TouchableOpacity, TouchableHighlight, CheckBox } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/header/header';
import style from './style'

let {height, width}=Dimensions.get("window");

export default class MomentFilter extends React.Component{

    constructor(){
        super();
        this.state={
            modalVisible:false,
            selectAll:false,
            selectItems:false,
            selectFood:false,
            selectDrink:false,
            selectEntry:false
        }
    }

    drawerToggle(){
        this.props.navigation.drawerToggle();
        // console.log(this.props)
    }

    modalView(){
        return(
            <Modal
                visible={this.state.modalVisible}
                transparent={true}
                animationType={"fade"}
                onRequestClose={(error)=>{console.log(error)}}
            >
                <TouchableHighlight
                    style={style.modalContainer}
                    onPress={()=>{
                        console.log();
                        this.setState({modalVisible:false})
                    }}
                >
                    <View style={style.popWrapper}>
                        <View style={{flex:1, justifyContent:"center"}}>
                            <CheckBox
                                value={this.state.selectAll}
                                onValueChange={(value)=>{
                                    console.log(value);
                                    this.setState({selectAll:!value});
                                }}
                            />
                        </View>
                        <View style={{flex:5}}></View>
                    </View>
                </TouchableHighlight>
            </Modal>
        )
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:"#000"}}>
                {this.modalView()}
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
                    middleText={ "ADD MOMENT FILTER" }
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
                <View style={style.container}>
                    <TouchableOpacity
                        style={style.dropDownContainer}
                        onPress={()=>{
                            this.setState({modalVisible:true})
                        }}
                    >
                        <View style={style.dropDownTextWrapper}>
                            <Text style={style.dropDownText}>Select Image Type</Text>
                        </View>
                        <View style={style.dropDownArrowWrapper}>
                            <Octicons name={"triangle-down"} color={"#000"} size={25}/>
                        </View>
                    </TouchableOpacity>
                    <Image
                        style={style.image}
                        resizeMode={"cover"}
                        source={require("../../../assets/party.jpg")}
                    />
                    <TouchableOpacity
                        style={style.uploadImageButton}
                    >
                        <LinearGradient
                            colors={['#FF41A8','#FFB847']}
                            style={[style.alignCenter, {flex:1}]}
                        >
                            <Text style={style.uploadImageButtonText}>UPLOAD IMAGE</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <View style={style.bottomButtonContainer}>
                        <TouchableOpacity
                            style={style.bottomButtonWrapper}
                            onPress={()=>{
                                // this.props.navigation.navigate("profile");
                            }}
                        >
                            <LinearGradient
                                colors={["rgb(255, 65, 168)", "rgb( 255, 184, 71)"]}
                                style={style.button}
                            >
                                <View style={{height:"97%", width:"98%", alignItems:"center", justifyContent:"center", backgroundColor:"#000", borderRadius:100}}>
                                    <Text style={{color:"#fff", fontSize:14}}>CANCEL</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[style.bottomButtonWrapper, {marginLeft:"10%"}]}
                            onPress={()=>{
                                // this.updateUserDetails();
                            }}
                        >
                            <LinearGradient
                                colors={["rgb(255, 65, 168)", "rgb( 255, 184, 71)"]}
                                style={style.button}
                            >
                                <Text style={{color:"#fff", fontSize:14}}>SAVE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}