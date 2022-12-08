import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');


const Buttons = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnView} onPress={props.onpress} >
        <Text style={styles.textStyle}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    height: height / 12,
    width: width,
    marginTop: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    width: 120,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
