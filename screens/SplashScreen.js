import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text
} from "react-native";
import Colors from "../constants/Colors";
const SplashScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate("DataScreen")}
          
        >
          <Image
            style={styles.imageMain}
            source={require("../assets/covid.png")}
          />
          <Text style={styles.textMain}>สถิติโควิด</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate("SplashScreen2")}
        >
          <Image
            style={styles.imageMain2}
            source={require("../assets/cpu.png")}
          />
          <Text style={styles.textSub}>สเปก CPU และ RAM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main:{
      justifyContent:'center',
      alignItems:'center'
  },
  textMain:{
     textAlign:'center',
     color:Colors.primary,
     fontSize:22
  },
  textSub:{
    textAlign:'center',
    color: Colors.danger,
    fontSize:22
  },
  touch:{
    marginVertical:50
  },
  imageMain:{
    height:100,
    width:100
  },
  imageMain2:{
    height:80,
    width:80
  }
});