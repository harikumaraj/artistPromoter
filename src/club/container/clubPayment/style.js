import {Dimensions, StyleSheet} from 'react-native';

let {height, width}= Dimensions.get("window");

export default StyleSheet.create({
    headerIconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    notificationIcon: {
        width: "45%",
        height: "45%"
    },
    notificationCountContainer: {
        position: "absolute",
        right: "20%",
        top: "20%",
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: "#000",
        zIndex: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    container:{
        flex:1,
        paddingHorizontal:"5%"
    },
    tabContainer:{
        width:"100%",
        height:height*0.05,
        alignItems:"center",
        flexDirection:"row",
        backgroundColor:"#FF41A8"
    },
    tabButton:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    tabButtonText:{
        color:"#fff",
        fontSize:12
    }
})