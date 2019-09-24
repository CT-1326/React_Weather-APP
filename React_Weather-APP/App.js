import React from 'react';
import { Alert } from "react-native";
import Loading from './Loading';
import Weather from './Weather';
import * as Loc from 'expo-location';
import axios from "axios";

const API_KEY = "585b5497a90125dfd1dc4130f6b18c23";

export default class extends React.Component{
  state={
    isLoading : true
  };
  getWeather = async(latitude,longitude) =>{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({isLoading : false, condi : data.weather[0].main, temp : data.main.temp});
    console.log(this.state);
  };
  getLocation = async() => {
    try {
      await Loc.requestPermissionsAsync();
      const { coords: {latitude,longitude} } = await Loc.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch (e) {
      Alert.alert("Can't find You","So FFFuck");
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading,temp,condi} = this.state;
    return isLoading? <Loading /> : <Weather temp={Math.round(temp)} condi={condi} />;
  }
}
