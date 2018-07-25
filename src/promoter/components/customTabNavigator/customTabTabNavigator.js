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
        }
    }

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
            let label = getLabelText({route});
            this.color = color;
            this.label = label;
            switch (idx) {
                case 0:
                    icon = <Entypo name={"home"} color={color} size={25}/>;
                    label="Home";
                    break;
                case 1:
                    icon = <MaterialCommunityIcons name={"compass-outline"} color={color} size={25}/>;
                    label="Payment";
                    break;
                case 3:
                    icon = <MaterialCommunityIcons name={"message-processing"} color={color} size={25}/>;
                    label="messaging";
                    break;
                case 4:
                    icon = <FontAwesome name={"user"} color={color} size={25}/>;
                    label="profile";
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
                <Text style={{color:"#fff", fontSize:10}}>Agreement</Text>
            </TouchableOpacity>
        )
    }
}