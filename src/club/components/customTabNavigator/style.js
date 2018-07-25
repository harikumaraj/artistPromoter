import {Dimensions, StyleSheet} from 'react-native';

let {height, width}= Dimensions.get("window");

export default StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        paddingBottom:height*0.10
    },
    popWrapper:{
        width:"60%",
        height:"30%",
        backgroundColor:"#fff",
        borderRadius:5,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#fff',
        shadowOffset: { height: 0, width: 0 }
    },
    navigateButton:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    navigateButtonText:{
        color:"#000",
        fontSize:16,
        fontWeight:"200"
    }
});