import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,YellowBox,TextInput,Button} from 'react-native';
import * as firebase from 'firebase'
import 'firebase/firestore'
import React,{useState,useEffect} from 'react';
import Asyncstorage from '@react-native-community/async-storage'
const firebaseConfig = {
  apiKey: "AIzaSyClCiWKJfSC-BvWSBul5N79E-DcyHX-ed4",
  authDomain: "chatapp2-417cb.firebaseapp.com",
  projectId: "chatapp2-417cb",
  storageBucket: "chatapp2-417cb.appspot.com",
  messagingSenderId: "1025573021025",
  appId: "1:1025573021025:web:ec39f6ea2ad9ad6fda5120"
};
if(firebase.app.length===0){
  firebase.initializeApp(firebaseConfig)
}
YellowBox.ignoreWarnings('Hello')

export default function App() {
  const [user,setUser] = useState('')
  useEffect(()=>{
    readUser()
  },[])
  async function readUser(){
    const user = await Asyncstorage.getItem('user')
    if(user){
      setUser(JSON.parse(user))
    }
  }
  if(!user){
    return (<View style={style.container}>
    <TextInput style={style.txt}/>
    </View>)
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    height:50,
    width:"100%",
    borderWidth:3,
    padding:15,
    borderColor:"black"
  }
});
