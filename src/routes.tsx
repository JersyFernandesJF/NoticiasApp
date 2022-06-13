import Login from './screens/login'
import Onboarding from './screens/onboarding';
import Feed from './screens/feed'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import * as React from 'react';
import { useEffect, useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@app_use';
const Stack = createNativeStackNavigator();

export default function App() {

  
  
    const [onboarding, setOnboarding] = useState(false)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const readData = async () => {
          try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            if (value !== null) { setOnboarding(value.toString()) }
            else { return null }
          } catch (e) { alert('Failed to fetch the input from storage');}
     };

     {onboarding?<Login/>:<Onboarding/>}
    useEffect(() => {
        readData()
        auth().onAuthStateChanged( userState => { setUser(userState);
          if (loading) { setLoading(false) } }) },[]);

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={onboarding?'Onboarding':'Login'}
       screenOptions={{
         headerShown: false,
       }}
       >
         <Stack.Screen name='Onboarding' component={Onboarding}/>
         <Stack.Screen name='Login' component={user?Feed:Login}/>

       </Stack.Navigator>
    </NavigationContainer>
  );
}