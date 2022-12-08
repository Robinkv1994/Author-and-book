import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';


const {height, width} = Dimensions.get('window');

const AuthorList = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Image style={styles.image} source={require('../../assets/user.png')} />
        <Text style={styles.textStyle}>{props.counter}</Text>
        <Text style={styles.textStyle}> {props.AuthorName}</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AuthorList;

const styles = StyleSheet.create({
  container: {
    height: (height / 15) * 1.5,
    width: width,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.9,
    borderRadius: 18,
    marginTop: 10,
    justifyContent:'space-between',
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  image: {
    height: 50,
    width: 50,
    marginLeft: 20,
  },
  btn: {
    flexDirection: 'row',
  },
  editbtn: {
    borderWidth: 1,
    borderRadius: 25,
    marginRight:10,
    backgroundColor:'red'
  },
});
