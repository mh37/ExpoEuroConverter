import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Alert, StyleSheet, Text, View, Button, TextInput, StatusBar, Image } from 'react-native';

//API KEY: OSWsYLQTEFPcbGYtTcYTXHZSeZLn8ktU
// http://api.exchangeratesapi.io/latest?access_key=your_key

export default function App() {

  const [selectedCCY, setSelectedCCY] = useState();

  const [ccyAmt, setCCYamt] = useState('');
  const [recipes, setRecipes] = useState([]);
 
  const convertCCY = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ccyAmt}`)
    .then(response => response.json())
    .then(responseJson => setRecipes(responseJson.meals))
    .catch(error => { 
        Alert.alert('Error', error); 
    });    
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} /> 
      <TextInput style={styles.textInput} placeholder='0.00' 
        onChangeText={text => setCCYamt(text)} />
      <Picker
        selectedValue={selectedCCY}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedCCY(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      <Button title="Convert" onPress={convertCCY
  } />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 thumbnail: {
  width: 50,
  height: 50,
 },
 textInput: {
  fontSize: 18, 
  width: 200
 }
});
