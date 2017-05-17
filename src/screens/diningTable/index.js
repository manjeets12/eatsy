import React, {Component,PropTypes} from 'react';
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  View,ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Picker,
  KeyboardAvoidingView,
  Keyboard,
  LayoutAnimation
} from 'react-native';
import Stars from 'react-native-stars-rating';
const { width, height } = Dimensions.get('window');

import styles from 'src/common/styles';
import{TABLE, VISA, USER1, USER2, USER3, USER4 } from 'src/common/Images';

const Item =(props)=>{
  let {left, right, leftTextStyle,style, rightTextStyle,alignRight} =props;
    return(
        <View style={[style,{flexDirection:'row'}]}>
          <View style={{flex:2}}>
               <Text style={leftTextStyle}>{left}</Text>
          </View>
          <View style={{flex:1.2, alignItems:(alignRight==="start")?'flex-start':'flex-end'}}>
              <Text style={rightTextStyle}>{right}</Text>
          </View>
        </View>
    );
}
Item.propTypes={
    left:PropTypes.string.isRequired,
    right:PropTypes.string.isRequired,
    alignRight:PropTypes.string.isRequired,
    style:View.propTypes.style,
    leftTextStyle:Text.propTypes.style,
    rightTextStyle:Text.propTypes.style,

};
Item.defaultProps = {
  title: '',
  right:'',
  alignRight:"start",
  style:{},
  leftTextStyle:{color:'#ababab',fontSize:13},
  rightTextStyle:{color:'#ababab',fontSize:13},
};


const User =(props)=>{
  let {name, bill, avatar}=props;
  return(
          <View style={styles.table.user}>
                <View style={styles.common.leftBox}>
                     <Image style={[styles.common.ImageSize40,{borderRadius:20}]}
                        source={avatar}/>
                </View>
                <View style={styles.common.middleBox}>
                      <Text style={styles.common.smallBold}>{name}</Text>
                </View>
                <View style={[styles.common.rightBox,{flex:3}]}>
                        <Text style={styles.common.samllLight}>{bill}</Text>
                </View>
            </View>
   );
}
User.propTypes={
    name:PropTypes.string.isRequired,
    bill:PropTypes.string.isRequired,
};
User.defaultProps = {
  name: '',
  bill:'',
};

class DiningTable extends Component {
  constructor(props) {
     super(props);
     this.state={
       visibleHeight:height
     }
  }
 

  render() {
    return (
       <View style={[styles.common.container]}>
        <ScrollView>
         <View style={[styles.common.card,styles.common.cardShadow]}>
           <View style={{}}>
              <Text style={[styles.common.largeBold,{padding:10, alignSelf:'center'}]}>Your table rating was</Text>
              <View style={styles.common.centering}>
                  <Stars
                    isActive={true}
                    rateMax={5}
                    isHalfStarEnabled={false}
                    onStarPress={(rating) => console.log(rating)}
                    rate={0}
                    size={40}
                  />
              </View>
              
               <TouchableOpacity onPress={()=>{}}
                   style={[styles.common.fullWidthBtn,{marginBottom:0}]}>
                    <Text style={[styles.common.smallBold,{color:'#FFF'}]}>DONE</Text>
              </TouchableOpacity>
           </View>
         </View>

         <View style={[styles.common.card,styles.common.cardShadow,{marginTop:0}]}>
           <View style={{flexDirection:'row',alignItems:'center', padding:10}}>
              <View style={styles.common.leftBox}>
                    <Image style={styles.common.ImageSize40}
                      source={TABLE}/>
              </View>
              <View style={styles.common.middleBox}>
                    <Text style={styles.common.smallBold}>Supermans</Text>
              </View>
              <View style={styles.common.rightBox}>
                    <View style={[styles.table.badgeStyle]}>
                      <Text style={[styles.table.badgeText]}>{7}</Text>
                    </View>
              </View>
           </View>
         </View>

         <View style={[styles.common.card,styles.common.cardShadow,{marginTop:0}]}>
           <View style={{padding:10}}>
              <Item left={"X2 Mardi Gras Bistro Signature"} right={"SGD 18"} leftTextStyle={styles.common.smallBold} alignRight={"end"}/>
              <Item left={"X1 Jambalaya"} right={"SGD 18"} leftTextStyle={styles.common.smallBold} alignRight={"end"} style={{marginBottom:10}}/>
              <Item left={"Subtotal"} right={"SGD 36"}/>
              <Item left={"Servicefee 10%"} right={"SGD 3.6"}/>
              <Item left={"GST 7%"} right={"SGD 2.52"}/>
              <Item left={"Discount"} right={"NA"}/>
              <Item left={"Total"} right={"SGD 42.12"} leftTextStyle={styles.common.largeBold} rightTextStyle={styles.common.largeBold} style={{marginTop:10}}/>
              <Item left={"total bill for table"} right={"SGD 235.90"}/>

              <View style={styles.table.cardContainer}>
                  <View style={styles.table.card}>
                    <Image style={styles.common.ImageSize40}
                      source={VISA}/>
                  </View>
                  <View style={{flex:8}}>
                        <Text style={styles.common.smallBold}>DBS Savings SPEP account</Text>
                        <Text style={styles.common.samllLight}>{"**** 4135"}</Text>
                  </View>
              </View>

              <Item left={"Bill payment"} right={"Split Individually"}/>
              <Item left={"Transaction"} right={"22 Nov 2016 8:23 PM"}/>
           </View>
         </View>
         <View style={[styles.common.card,styles.common.cardShadow, {marginTop:0}]}>
           <View style={{padding:10}}>
                <User name="April" bill="SGD 38.52" avatar={USER1}/>
                <User name="David" bill="SGD 65.00" avatar={USER2}/>
                <User name="John" bill="SGD 60.79" avatar={USER2}/>
                <User name="Mary" bill="SGD 71.59" avatar={USER3}/>
           </View>
         </View>
        </ScrollView>
      </View>
    );
  }
}
DiningTable.route = {
    navigationBar: {
      title: 'History Detail',
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default DiningTable;


