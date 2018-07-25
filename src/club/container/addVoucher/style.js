import {Dimensions, StyleSheet} from 'react-native';

let {height, width}= Dimensions.get("window");

export default StyleSheet.create({
    wrapper:{
        flex:1
    },
    headerIconContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    notificationIcon:{
        width:"45%",
        height:"45%"
    },
    notificationCountContainer:{
        position:"absolute",
        right:"20%",
        top:"20%",
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:"#000",
        zIndex:16,
        alignItems:"center",
        justifyContent:"center"
    },
    container:{
        flex:1,
        paddingHorizontal:width*0.07,
        paddingTop:height*0.02,
        paddingBottom:height*0.05
    },
    dropDownContainer:{
        height:50,
        paddingHorizontal:"5%",
        backgroundColor:"#fff",
        borderRadius:5,
        flexDirection:"row"
    },
    dropDownText:{
        fontSize:14,
    },
    dropDownTextWrapper:{
        flex:8,
        justifyContent:"center"
    },
    dropDownArrowWrapper:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    alignCenter:{
        alignItems:"center",
        justifyContent:"center"
    },
    modalContainer:{
        flex:1,
        alignItems:"center",
        paddingTop:height*0.12+50
    },
    popWrapper:{
        width:"90%",
        height:"40%",
        backgroundColor:"#fff",
        borderRadius:5
    },
    imageContainer:{
        flex:1,
        paddingTop:"5%"
    },
    image:{
        height:"60%",
        width:"100%",
        borderRadius:5,
        marginVertical:"5%"
    },
    uploadImageButton:{
        width:"100%",
        height:"7%",
        borderRadius:50,
        overflow:"hidden"
    },
    uploadImageButtonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"200"
    },
    bottomButtonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        paddingBottom: "5%"
    },
    bottomButtonWrapper:{
        height:"55%",
        width:"45%",
        borderRadius:100
    },
    button:{
        height:"100%",
        width:"100%",
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    }
});