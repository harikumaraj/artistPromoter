import { Dimensions, StyleSheet } from 'react-native'

let {height, width}= Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000"
    },
    imageContainer:{
        height:height*0.2,
        width,
        alignItems:"center",
        justifyContent:"center"
    },
    datSpotImage:{
        height:"80%",
        width:"40%"
    },
    addYourClubTextContainer:{
        height: height*0.15,
        width,
        paddingHorizontal:"10%",
        alignItems:"center",
        justifyContent:"space-around"
    },
    addYourClubTextLabel:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "300"
    },
    addYourClubText:{
        color: "#fff",
        fontSize: 14,
        textAlign:"center"
    },
    searchBarContainer:{
        height:height*0.1,
        paddingHorizontal:"10%",
        justifyContent:"center",
        alignItems:"center"
    },
    searchBarWrapper:{
        flexDirection:"row",
        width:"100%",
        height:"60%",
        backgroundColor:"#fff",
        borderRadius:100
    },
    searchIconContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    searchIcon:{
        flex:1
    },
    searchInputContainer:{
        flex:5,
        justifyContent:"center",
    },
    searchInput:{
        color:"#000",
    },
});