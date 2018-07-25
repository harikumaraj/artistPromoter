import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, Modal, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

let {height, width} = Dimensions.get('window');
import style from './style'

export default class CustomTabNavigationBar extends Component {

    constructor(props){
        super();
        this.state={
            modalVisible:false
        }
    }

    modal(){
        console.log("modal pressed");
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
                        this.setState({modalVisible:false})
                    }}
                >
                    <View style={style.popWrapper}>
                        <TouchableOpacity
                            style={style.navigateButton}
                            onPress={()=>{
                                this.setState({modalVisible:false});
                                this.props.navigation.navigate("AddEvent");
                            }}
                        >
                            <Text>Create Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.navigateButton}
                            onPress={()=>{
                                this.setState({modalVisible:false});
                                this.props.navigation.navigate("MomentFilter");
                            }}
                        >
                            <Text>Create Moment Filter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.navigateButton}
                            onPress={()=>{
                                this.setState({modalVisible:false});
                                this.props.navigation.navigate("AutoVoucher");
                            }}
                        >
                            <Text>Create Voucher</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableHighlight>
            </Modal>
        )
    }

    toggleModal=(()=>{
        this.setState({modalVisible:!this.state.modalVisible})
    }).bind(this);

    // We will use this function in array's map
    renderTabBarButton(route, idx){

        if(idx<5) {

            let icon;
            const {
                activeTintColor,
                inactiveTintColor,
                navigation,
                getLabelText,
                renderIcon,
            } = this.props;
            const color = navigation.state.index === idx ? activeTintColor : inactiveTintColor;
            const label = getLabelText({route});
            this.color = color;
            this.label = label;
            switch (idx) {
                case 0:
                    icon = <Entypo name={"home"} color={color} size={25}/>;
                    break;
                case 1:
                    icon = <MaterialCommunityIcons name={"compass-outline"} color={color} size={25}/>;
                    break;
                case 3:
                    icon = <MaterialCommunityIcons name={"message-processing"} color={color} size={25}/>;
                    break;
                case 4:
                    icon = <FontAwesome name={"user"} color={color} size={25}/>;
                    break;
                default:
                    icon=null
            }

            return (
                <TouchableOpacity
                    onPress={() => {
                        if (navigation.state !== idx) {
                            navigation.navigate(route.routeName);
                        }
                    }}
                    style={{flex: 1, alignItems: "center", justifyContent: "center"}} // Your style goes here
                    key={route.routeName}
                >
                    {icon}
                    <Text style={{color, fontSize: 10}}>
                        {label}
                    </Text>
                </TouchableOpacity>
            );
        }
    }

    render() {
        let {height, width} = Dimensions.get('window');
        let tabBarButtons = this.props.navigation.state.routes.map(this.renderTabBarButton.bind(this));
        tabBarButtons.splice(2, 1, <View style={{flex:1, alignItems:"center"}}>
            <CenterButton label={this.label} color={this.color} {...this.props} toggleModal={this.toggleModal}/>
        </View>);
        return (
            <LinearGradient
                colors={['#666', '#333', '#000']}
                style={{
                    flexDirection: 'row',  // we want our tab bar is bar not column
                    height: height/12,
                    width:"100%",
                }}
            >
                { tabBarButtons }
                { this.modal() }
            </LinearGradient>
        );
    }
}

class CenterButton extends React.Component{

    render() {
        return (
            <TouchableOpacity
                style={{
                    height: width / 7,
                    width: width /7,
                    borderRadius:width/14,
                    position:"absolute",
                    bottom:height/12-width/8.5,
                    alignItems:"center"
                }}
                onPress={()=>{
                    this.props.toggleModal();
                    console.log(this.props);
                }}
            >
                <Image
                    source={require("../../../assets/small_button.png")}
                    style={{
                        flex:1
                    }}
                    resizeMode={"contain"}
                />
                <Text style={{color:"#fff", fontSize:10}}>Add</Text>
            </TouchableOpacity>
        )
    }
}