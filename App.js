import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Alert, StyleSheet, Text, View, Button, TextInput, StatusBar, Image } from 'react-native';


export default function App() {

  const [selectedCCY, setSelectedCCY] = useState();

  const [ccyAmt, setCCYamt] = useState('');
  const [ccyList, setCCYlist] = useState([]);
 
  const convertCCY = () => {

    //set request headers
    myHeaders = new Headers();
    myHeaders.append("apikey", "rqxqqVwqu7w80WbugrWDosNnvxGOuRRb");
    //set request options
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  
    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
      .then(response => response.text())
      .then(result => setCCYlist(result.symbols))
      .catch(error => console.log('error', error));
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
