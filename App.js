import React, {useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Header from './components/Header';
import {uuid} from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      <Header title={'InventoryU'} />
      <Image source={{uri: './LandingPage.png'}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default App;
