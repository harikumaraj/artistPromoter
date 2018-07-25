import React, { Component } from 'react';
import {StyleSheet,
        View,
        Text,
        ImageBackground,
        Alert,
        Image,
        TouchableOpacity,
        ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from './style';

export default class SubCategory extends Component{

    functionAlert()
    {
        Alert.alert("This is alert");
    }


    render()
    {
      return(
       <View style={{backgroundColor:'#000000',flex:1,flexDirection:'column'}}>

        <ScrollView>

          <View style={{flex:1,flexDirection:'column'}}>
         
         <View style={{height:40,width:null}}/>

         <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
          <Image source={require('../images/logo.png')}
                 style={{height:150,width:150}}
                 resizeMode={"contain"}/>
         </View>

         <Text style={style.textHeading}>What do you perform ?</Text>

         <View style={style.viewImages}>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>DJ</Text>
         </ImageBackground>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>SINGER</Text>
         </ImageBackground>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         </View>

         <View style={style.viewImages}>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         </View>


         <View style={style.viewImages}>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         <ImageBackground 
         source={require('../images/big_button.png')}
         style={style.viewSubCategory}>
         <Text style={style.textSubCategory}>LOREM</Text>
         </ImageBackground>

         </View>

        </View>

    </ScrollView>

      <View style={style.viewButton}>
       <TouchableOpacity
       style={style.buttonContainer}
       onPress={()=>{
           this.props.navigation.navigate("SelectCity");
       }}
       >
          
          <LinearGradient colors={['#FF41A8','#FFB847']} style={style.button}> 
           <Text style={{color:'#ffffff',fontSize: 15,textAlign:'center'}}>PROCEED</Text>
          </LinearGradient>
      </TouchableOpacity>
      </View>
        </View>

      );
    }
} 