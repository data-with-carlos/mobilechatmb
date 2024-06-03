import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const Input = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} keyboardType="numeric" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingBottom: 35,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Input;

//componente de entrada