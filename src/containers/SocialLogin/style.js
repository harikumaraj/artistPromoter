import { StyleSheet, Dimensions } from 'react-native';

let {height, width}= Dimensions.get('window');

export default StyleSheet.create({

    textHeading:
    {
        color:'#ffffff',
        fontSize:15,
        alignSelf:'center',
        marginTop:20
    },
    textSubheading:
    {
        color:'#ffffff',
        fontSize:15,
        alignSelf:'center',
        marginTop:5
    },
    buttonContainer:
    {
     width: "70%",
     height: height*0.065,
     borderRadius:200,
     overflow:"hidden",
     backgroundColor:"#fff",
     marginTop:10
    },
    button:
    {
     flex:1,
     justifyContent:"center",
     alignItems:"center"
   },
   viewButton:
   {
    height:60,
    width:null,
    alignItems:'center',
    justifyContent:'center',
    bottom:0,
    marginBottom:20
   }
})