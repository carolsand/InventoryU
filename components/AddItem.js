import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddItem;
