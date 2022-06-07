import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
   
export default function  login() {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [ errorLogin, setErrorLogin ] = useState('')
      const [ isLoading, setIsLoading ] = useState(false)
      const [ action, setAction ] = useState('Login')
   
    function handleSignIn () {
         
       setIsLoading(true)

       auth()
       .signInWithEmailAndPassword(email, password)
       .then(()=> Alert.alert("Logado com Sucesso!"))
       .catch((error) => console.log(error))
       .finally(() => setIsLoading(false))
      
    }
    function handleNewAccount () {
         
      setIsLoading(true)

      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(()=> Alert.alert("Conta", "Cadastrado com Sucesso!"))
      .catch((error)=> console.log(error))
      .finally(() => setIsLoading(false))
     
   }
    
      
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      
                <Text style={{fontSize:32, fontWeight:"bold", marginBottom: 50}}>Login NewsApp</Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  placeholderTextColor="#003f5c"
                  value= {email}
                  onChangeText = { (text)=> setEmail(text)}
                />
         
 
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  value={password}
                  onChangeText = { (text) => setPassword(text)}
                />
          
      

      <TouchableOpacity style={styles.loginBtn} onPress={handleSignIn}>
        <Text style={[styles.loginText,{ color: 'white'}]}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNewAccount} >
        <Text style={[styles.forgot_button, {marginTop: 50}]}>Register</Text>
      </TouchableOpacity>



      </KeyboardAvoidingView>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     },
     
      
      TextInput: {
        borderBottomWidth:1,
        width: 320,
        fontSize:14,
        marginVertical:30,
        borderRadius: 20
    },
     
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
     
      loginBtn: {
        width: 240,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
      },

    
       
  });

