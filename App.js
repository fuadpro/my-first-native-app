import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View,Image, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

function MyCustomButton(props){
  return(
          <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
            <Text style={styles.buttonText}>
              {props.title}
            </Text>
          </TouchableOpacity>
  )
}

export default function App() {

  const [count, setCount] = useState(0);

  const handleIncrement=()=>{
    setCount(count + 1)
   }

  const handleDecrement=()=> {
    
    if (count > 0) {
      setCount(count - 1);
    }
   }

  return (
        <SafeAreaView>
          <View style={styles.container}>
            <Image 
            source={{uri: "https://www.rentallscript.com/resources/content/images/size/w1384/2021/09/React--1-.gif"}}
            style={styles.image}/>
            
            <Text style={styles.text}>Counter: {count} </Text>
            <Text style={styles.subtitles}>Click buttons to change the counter</Text>

            {/* <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  Increment
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.button , styles.button2 ]}>
                <Text style={styles.buttonText}>
                  Decrement
                </Text>
              </TouchableOpacity>
            </View> */}

            <View style={styles.buttonContainer}>
               <MyCustomButton title="Increment +" onPress={handleIncrement} />
               <MyCustomButton title="Decrement -" style={{marginStart : 16, backgroundColor : "#C70039",}} 
               onPress={() => handleDecrement()}/>
            </View>
          
            <Text style={styles.textEnd}>@fuadpro</Text>
          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    margin : 16,
  },
  text: {
      fontSize : 30,
      marginTop: 16,
  },
  textEnd :{
    textAlign:"center",
    marginTop: 180,
  },
  subtitles: {
      fontSize : 20,
      marginTop: 8,
      color: "darkgrey",
    },
  image : {
    height: 180,
    borderRadius: 12,
  },
  button : {
    backgroundColor : "lightblue",
    padding : 12,
    borderRadius : 12,
    alignItems: "center",
    flex : 1,
  },
  button2 : {
    marginStart : 16 ,
    backgroundColor : "red",
  },
    buttonText:{
    fontSize : 20,
    color : "black",
  },
  buttonContainer:{
    marginTop : 20,
    flexDirection : "row",
  },

});
