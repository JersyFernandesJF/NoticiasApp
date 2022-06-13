import React, { useRef, useState, useEffect} from "react"
import { View,  StyleSheet, Dimensions, Text, Animated, AppRegistry, TouchableOpacity} from "react-native" 
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slide from '../../components/slide'

const { width } = Dimensions.get("window")
const STORAGE_KEY = '@app_use';
const slides = [
    {label: "Your app, which brings you the hottest news today!"},
    {label: "Sports, Investments, Religion, Politics, all at one click!"},
]


const Onboarding = (props) => {
    const [clickIndex, setClickIndex] = useState(0)
    const saveData = async () => {
        try {
          await AsyncStorage.setItem(STORAGE_KEY, 'true')
        } catch (e) {
          alert('Failed to save the data to the storage')
        }
      }
    
    const scroll = useRef();
     return (
        <View style = {[styles.container]}>
            <Animated.View style = {[styles.slider]}>
                <Animated.ScrollView 
                onLayout = {(event) =>{
                    console.log(event.nativeEvent.layout)
                }}
                ref={scroll}
                horizontal snapToInterval={width} 
                decelerationRate="fast" 
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator = {false}>
                 {slides.map(({label}, index)=>( 
                     <Slide key={index} {...{label}} />
                 ))}
                </Animated.ScrollView>

            </Animated.View>
            <Animated.View style={styles.footer}>
                  <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "black"}}/>
                  <View style={{ flex: 1, backgroundColor:'black', borderTopLeftRadius: 75 }} />
            <Text style={{color:'white', fontSize: 20, fontWeight:'300', marginBottom: 40}}>Get all the news right here!</Text>
            <TouchableOpacity onPress={()=>{
                   scroll.current.scrollToEnd()
                   if(clickIndex===0){setClickIndex(clickIndex + 1)}
                   else {saveData()
                   props.navigation.navigate('Login')
                }
                    
                }}>
            <View style={styles.loginBtn}>
                <Text style={{ color:"white", fontWeight:"700", fontSize:16}}>Next</Text>
            </View>
            </TouchableOpacity>
           </Animated.View>
       </View>

    )
}

export default Onboarding
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    slider: {
        flex: 2,
        backgroundColor:"white",
        borderBottomRightRadius: 75
    },
    footer: {
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    loginBtn: {
        width: 260,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
        backgroundColor: "black",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "white"
      },
})
AppRegistry.registerComponent("animations", () => animations);