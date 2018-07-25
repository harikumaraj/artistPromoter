import React, { Component } from 'react';
import {StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
    Image,
    TouchableHighlight,
    ScrollView} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

export default class clubEvent extends Component{

    functionAlert()
    {
        Alert.alert("This is alert");
    }

    render()
    {
        return(

            <View style={{flex:1,flexDirection:'column',backgroundColor:'#000000',justifyContent:'center'}}>

                <Text style={styles.textHeading}>You have not added any</Text>
                <Text style={styles.textHeading}>events yet.</Text>
                <LinearGradient colors={['#FF41A8','#FFB847']}
                                style={{width:"50%",
                                    borderRadius:20,
                                    alignItems:'center',
                                    marginHorizontal:10,
                                    marginTop:8,
                                    alignSelf:'center',
                                    justifyContent:'center'}}>

                    <View style={styles.buttonBlack}>

                        <TouchableHighlight
                            style={{
                                paddingHorizontal:8,
                                paddingVertical:8,
                                justifyContent:'center',
                                alignItems:'center'}}
                            onPress={()=>{
                                this.props.navigation.navigate("AddEventScreen");
                            }}
                        >

                            <Text style={{color:'#ffffff',fontSize:15}}>Add events now</Text>

                        </TouchableHighlight>

                    </View>

                </LinearGradient>

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
            marginHorizontal:30
        }

});