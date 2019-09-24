import React from 'react';
import Loading from './Loading'
import {Alert} from 'react-native';
import * as Location from 'expo-location';

export default class extends React.Component{
  state ={
    isLoading : true
  };

  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      const{
        coords:{lat,long}
      }=await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      console.log(coords.lat,coords.long);
    } catch (e) {
      Alert.alert("Can't find you!","so FFFFFuck");
    }
  }

  componentDidMount(){
    this.getLocation();
  }

  render(){
    return <Loading />;
  }
}
