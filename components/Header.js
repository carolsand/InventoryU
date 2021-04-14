import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'rgba(255,130,255, 0.6)',
  },
  text: {
    color: 'rgba(0,0,0, 1.0)',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;