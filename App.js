import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Header from './components/Header';
import uuid from 'uuid';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Box'},
    {id: uuid(), text: 'Bed Room'},
    {id: uuid(), text: 'Kitchen'},
    {id: uuid(), text: 'Garage'},
    {id: uuid(), text: 'Remotestorage'},
    {id: uuid(), text: 'Entertainment Room'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
