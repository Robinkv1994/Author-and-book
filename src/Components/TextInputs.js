import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

const TextInputs = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.label}</Text>
      <TextInput
        style={styles.inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboard}
        placeholder={props.placeholder}
      
        ></TextInput>
    </View>
  );
};

export default TextInputs;

const styles = StyleSheet.create({
  container: {
    height: height / 14,
    width: width,
    marginTop: 40,
    padding: 10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  inputStyle: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginRight:10
  },
});
