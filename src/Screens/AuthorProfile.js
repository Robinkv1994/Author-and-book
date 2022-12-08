import {Alert, Keyboard, LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextInputs from '../Components/TextInputs';
import Buttons from '../Components/Buttons';
import BookList from '../Components/BookList';
import {useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

const AuthorProfile = () => {
  const route = useRoute();
  const [bookname, setBookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const [details,setDetails]=useState([])
  const [clicked,setClicked]=useState(true)

  let userId = route.params.userId;

  const handleBookDetails = () => {
    if (bookname !== '' && bookPrice !== ''&& clicked ) {
      try {
        firestore().collection('booklist').doc(userId).collection('mybooks').doc('').set({
          bookPrice: bookPrice,
          bookname: bookname,
        });
        setBookName(''),
        setBookPrice('')
        
      } catch (error) {
        console.log(error);
      }
    } else {
      return Alert.alert('Please enter Values');
    }
  };
  LogBox.ignoreAllLogs();
  useEffect(()=>{
    const subcriber=firestore().collection('booklist').doc(userId).collection('mybooks').onSnapshot(querySnapshot=>{
      console.log('bookdetail',querySnapshot.size)
      let list =[]
      querySnapshot.forEach(documentSnapshot=>{
        list.push({
          ...documentSnapshot.data()
      })
      })
      setDetails(list)
    })
    return ()=> subcriber()
  },[])


  return (
    <View style={{flex:1}}>
      <Text style={styles.textStyle}>
        {route.params.userId}
      </Text>
      <TextInputs
        label={'Book Name :'}
        placeholder={'Enter Book Name'}
        value={bookname}
        onChangeText={bookname => setBookName(bookname)}
      />
      <TextInputs
        label={'Book Price :'}
        placeholder={'Enter Book Price'}
        keyboard={'number-pad'}
        value={bookPrice}
        onChangeText={bookPrice => setBookPrice(bookPrice)}
      />
      <Buttons
        label={'Add'}
        onpress={() => {handleBookDetails(bookname, bookPrice),
          Keyboard.dismiss()
        }}
      />
      <Text style={styles.textStyle}>My Books</Text>

      <FlatList data={details}
      keyExtractor={(item,index)=>item}
      renderItem={({item})=>{
        return(
          <BookList BookName={item.bookname} Price={item.bookPrice} />

        )
      }}/>
     
    </View>
  );
};

export default AuthorProfile;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
    margin: 10,
  },
});
