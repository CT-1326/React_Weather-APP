import React from 'React';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Prop from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOP={
  Thunderstorm:{
    icon:"weather-lightning-rainy",
    col:["#000000","#434343"],
    tit:"Thunderstorm",
    sub:"Be careful!"
  },
  Drizzle: {
      icon: "weather-hail",
      colors: ["#B9F7FE", "#66A6FF"],
      tit: "Drizzle",
      sub: "Is like rain, but gay."
  },
  Rain:{
    icon:"weather-rainy",
    col:["#373b44","#4286f4"],
    tit:"Rain",
    sub:"Take Umbrella"
  },
  Snow:{
    icon:"weather-snowy",
    col:["#ece9e6","#ffffff"],
    tit:"Snow",
    sub:"Winter is Come..."
  },
  Fog: {
      icon: "weather-fog",
      col: ["#757f9a","#d7dde8"],
      tit: "Fog",
      sub: "Watch out side"
  },
  Clear:{
    icon:"weather-sunny",
    col:["#fffc00","#ffffff"],
    tit:"Sunny",
    sub:"What a nice Day~"
  },
  Clouds:{
    icon: "weather-cloudy",
    col: ["#757f9a","#d7dde8"],
    tit: "Cloud",
    sub: "Normal",
  },
  Haze:{
    icon: "weather-fog",
    col: ["#757f9a","#d7dde8"],
    tit: "Haze",
    sub: "Watch out side"
  },
  Tornado:{
    icon:"weather-hurricane",
    col:["#4b6cb7","#182848"],
    tit:"Tornado",
    sub:"Rly Be careful!!!"
  },
  Mist:{
    icon: "weather-fog",
    col: ["#757f9a","#d7dde8"],
    tit: "Mist",
    sub: "Watch out side"
  },
  Smoke:{
    icon: "weather-fog",
    col: ["#757f9a","#d7dde8"],
    tit: "Smoke",
    sub: "Watch out side"
  },
  Dust:{
    icon:"weather-fog",
    col:["#cac531","#f3f9a7"],
    tit:"Dust",
    sub:"Watch out Side and Clean your hands"
  }
};

export default function Weather({temp,condi}){
  return(
    <LinearGradient
           colors={weatherOP[condi].col}
           style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          size={100}
          name = {weatherOP[condi].icon}
        />
        <Text style={styles.txt}>{temp}º</Text>
      </View>
      <View style={styles.halfcontainer}>
        <Text style={styles.Tit}>{weatherOP[condi].tit}</Text>
        <Text style={styles.Sub}>{weatherOP[condi].sub}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.Prop={
  temp : Prop.number.isRequired,
  condi : Prop.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Fog",
    "Clear",
    "Clouds",
    "Haze",
    "Tornado",
    "Mist",
    "Smoke",
    "Dust"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt:{
    color: 'white',
    fontSize: 50
  },
  halfcontainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Tit:{
    color:'black',
    fontSize: 30,
  },
  Sub:{
    color:'black',
    fontSize: 20
  }

});
