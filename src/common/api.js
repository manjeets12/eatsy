'use strict';

import React, {Component} from 'react';
import {Linking, Alert, NetInfo, Platform} from 'react-native';
import { NavigationActions} from 'react-navigation';

var api = {
    
    isAndroid(){
        return (Platform.OS === 'android');
    },

    resetRouteStack(dispatch, route){
        let resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: route})
          ]
        });
        dispatch(resetAction);
    },
    
    
    openURL(user){
        try{
                Linking.canOpenURL(user).then(supported => {
                if (supported) {
                  Linking.openURL(user);
                } else {
                  console.log('Please try again letter');
                }
              });
            }
           catch(error){
            console.log(error);
           }
    },
    validateEmailAddress(email) {
            let regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (regex.test(email)) {
                return true;
            } else {
                return false;
            }
    },
    converToDayMonthYear(miliseconds){
      let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let dateObj = new Date(miliseconds);
      let cDate = dateObj.getDate();
      let cMonth = dateObj.getMonth();
      let cYear = dateObj.getFullYear();
      let result = cDate +" "+months[cMonth]+" "+cYear;
      return result;
    },
    sortPatient(data){
      return data.sort((a, b)=>{
                //let aName = ((a.first_name || "") + " " + (a.last_name || "")).toLowerCase();
                //let bName = ((b.first_name || "") + " " + (b.last_name || "")).toLowerCase();
                let aName = a.name;
                let bName = b.name;
                if(aName < bName) return -1;
                if(aName > bName) return 1;
                return 0;
              });
    },
   
}

export default api;



