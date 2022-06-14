import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth'
   
export default function  login() {
      const [email, setEmail] = useState(null)
      const [password, setPassword] = useState(null)
      const [errorEmail, setErrorEmail] = useState(null)
      const [ errorPassword, setErrorPassword] = useState(null)
     
      const [ isLoading, setIsLoading ] = useState(false)

      const verification = () => {
        let error = false
        setErrorEmail(null)
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(email).toLowerCase()) || password == null ){
          alert("Preencha os campos corretamente")
          error = true
        }
        return !error
      }
   
    function handleSignIn () {
        if(verification()){
       setIsLoading(true)

       auth()
       .signInWithEmailAndPassword(email, password)
       .then(()=> Alert.alert("Logado com Sucesso!"))
       .catch((error) => console.log(error))
       .finally(() => setIsLoading(false))
        }
      
    }
    function handleNewAccount () {
         
      if(verification()) {
      setIsLoading(true)

      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(()=> Alert.alert("Conta", "Cadastrado com Sucesso!"))
      .catch((error)=> console.log(error))
      .finally(() => setIsLoading(false))
      }
   }
    
      
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      
                <Text style={{fontSize:32, fontWeight:"bold", marginBottom: 50}}>Login NewsApp</Text>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email"
                  placeholderTextColor="#003f5c"
                  value= {email}
                  onChangeText = { (text)=> {setEmail(text)
                   setErrorEmail(null)}}
                  returnKeyType = "done"
                  errorMessage={errorEmail}
                />
         
 
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="#003f5c"
                  secureTextEntry={true}
                  value={password}
                  onChangeText = { (text) =>{ setPassword(text)
                  setErrorPassword(null)
                }
                }
                 errorMessage={errorPassword}
                  returnKeyType = "done"
                />
          
      

      <TouchableOpacity style={styles.loginBtn} onPress={handleSignIn}>
        <Text style={[styles.loginText,{ color: 'white'}]}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNewAccount} >
        <View style={{  width: 240,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        borderWidth: 2 }}>
        <Text >Register</Text>
        </View>
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
     
     
     
      loginBtn: {
        width: 240,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
      },

    
       
  });

