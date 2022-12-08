import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

const BookList = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require('../../assets/book.png')}></Image>
      </View>
      <View>
        <Text style={styles.textStyle}>Book Name :{props.BookName}</Text>
        <Text style={styles.textStyle}>Book Price : ${props.Price}</Text>
      </View>
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  container: {
    height: (height / 15) * 2.5,
    width:width,
    borderWidth: 0.9,
    borderRadius: 18,
    marginTop: 10,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff'
  
  },
  textStyle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft:20,
    marginTop: 10,
  },
  imageView: {
    height:80,
    width:80
    
  },
  image:{
    height:80,
    width:80
  }
});
