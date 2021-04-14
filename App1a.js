import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> InventoryU</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/women/1.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'orange',
    fontSize: 40,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
});

export default App;
