import Login from './screens/login'

import Feed from './screens/feed'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import * as React from 'react';
import { useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        auth().onAuthStateChanged(userState => {
          setUser(userState);
    
          if (loading) {
            setLoading(false);
          }
        });
      }, []);

  return (
    <NavigationContainer>
       {user? <Feed/> :<Login/>}
    </NavigationContainer>
  );
}