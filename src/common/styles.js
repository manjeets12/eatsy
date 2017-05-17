'use strict';

import {StyleSheet, Dimensions,} from 'react-native';

const { width, height } = Dimensions.get('window');
const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles={
    common:StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'#f3f4f7'
        },
        centering:{
            justifyContent:'center',
            alignItems:'center'
        },
        card:{
            margin:10,
            backgroundColor:'#FFFFFF'
        },
        cardShadow:{
            //borderRadius:3, 
            shadowColor:'#f0f1f4',
            shadowOffset:{width: 0, height: 5},
            shadowOpacity:.4,
            shadowRadius: 4, 
            elevation:4
        },
        largeBold:{
            fontSize:18,
            fontWeight:'bold',
            color:'#333'
        },
        smallBold:{
            fontSize:14,
            fontWeight:'bold',
            color:'#333'
        },
        samllLight:{
            color:'#ababab',
            fontSize:14
        },
        fullWidthBtn:{
            marginTop:10,
            marginBottom:10,
            padding:10, 
            justifyContent:'center', 
            alignItems:'center',
            borderColor:'transparent',
            backgroundColor:'#d4d4e0'
        },
        ImageSize30:{
            width:30, 
            height:30, 
            resizeMode:'contain'
        },
        ImageSize40:{
            width:40, 
            height:40, 
            resizeMode:'contain'
        },
        leftBox:{
            flex:2, 
            justifyContent:'center', 
            alignItems:'flex-start'
        },
        middleBox:{
            flex:8, 
            justifyContent:'center', 
            alignItems:'flex-start'
        },
        rightBox:{
            flex:2, 
            justifyContent:'center', 
            alignItems:'flex-end'
        },
    }),
    table:StyleSheet.create({
         badgeStyle:{
            width: 25,
            height:25,
            backgroundColor:'#2b8dfc',
            borderRadius:12.5,
            justifyContent:'center',
            alignItems:'center',
        },
        badgeText:{
            color:'#FFFFFF',
            fontSize:12,
            textAlign:'center',
        },
        cardContainer:{
            flexDirection:'row',
            padding:5, 
            margin:10, 
            borderTopColor:'#e0e0e0', 
            borderBottomColor:'#e0e0e0', 
            borderTopWidth:0.5, 
            borderBottomWidth:0.5
        },
        card:{
            flex:2.5,
            borderColor:'#e0e0e0', 
            borderWidth:1, 
            justifyContent:'center', 
            alignItems:'center',
            marginRight:10
        },
        user:{
            flexDirection:'row',
            alignItems:'center',
            padding:5, 
            borderBottomColor:'#e0e0e0', 
            borderBottomWidth:0.5
        }
    }),
    landing:StyleSheet.create({

    }),
}

	

export default styles;