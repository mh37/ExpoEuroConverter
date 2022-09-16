import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, StatusBar, Image } from 'react-native';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [currencies, setRecipes] = useState([]);
 
  const getRecipes = () => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "rqxqqVwqu7w80WbugrWDosNnvxGOuRRb");
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
    .then(response => response.json())
    .then(responseJson => setRecipes(responseJson))
    .catch(error => { 
        Alert.alert('Error', error); 
    });    
    console.log(JSON.stringify(currencies.symbols));
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "gray"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <TextInput style={styles.textInput} placeholder='keyword' 
        onChangeText={text => setKeyword(text)} />
      <Button title="Find" onPress={getRecipes
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
