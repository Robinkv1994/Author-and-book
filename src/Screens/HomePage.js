import {Alert, StyleSheet, Text, View, ScrollView, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextInputs from '../Components/TextInputs';
import Buttons from '../Components/Buttons';
import {useNavigation} from '@react-navigation/native';
import AuthorList from '../Components/AuthorList';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';

const HomePage = () => {
  const [author, setAuthor] = useState('');
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(0);
  const [userId, setUserId] = useState();
  const [clicked, setClicked] = useState(true);
  const [update, setUpdate] = useState();

  const Handleauthor = author => {
    if (author !== '' && clicked) {
      try {
        firestore().collection('Authors').doc('').set({
          author: author,
        });
        setAuthor('');
      } catch (error) {
        console.log(error);
      }
    } else {
      return Alert.alert('Please enter Name');
    }
  };

 
  useEffect(() => {
    const subcriber = firestore()
      .collection('Authors')
      .onSnapshot(querySnapshot => {
        console.log('size:', querySnapshot.size);
        const name = [];

        querySnapshot.forEach(documentSnapshot => {
          console.log('data:', documentSnapshot.data());
          console.log('id:', documentSnapshot.id);
          let userId = documentSnapshot.id;
          name.push({
            ...documentSnapshot.data(),
            userId,
          });
        });
        setList(name);
        setUserId(userId);
      });
    return () => subcriber();
  }, []);

  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text style={{...styles.textStyle, fontSize: 26}}>Register</Text>
      <TextInputs
        label={'Author Name :'}
        placeholder={'Enter name'}
        value={author}
        onChangeText={author => setAuthor(author)}
      />
      <Buttons
        label={'Add'}
        onpress={() => {
          Handleauthor(author);
          Keyboard.dismiss()
        }}
      />
      <Text style={{...styles.textStyle, fontSize: 20, color: 'red'}}>
        Author Names
      </Text>

      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <AuthorList
              AuthorName={item.author}
              onPress={() =>
                navigation.navigate('AuthorProfile', {
                  userId: item.author,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    margin: 10,
  },
});
