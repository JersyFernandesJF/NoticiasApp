import React from "react"
import { View, Text, Dimensions, StyleSheet} from "react-native"

interface SlideProps {
    label: string;
 
}
const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
       text1: {
        fontSize:25, 
        fontWeight:"bold",
        
       },
       
})

const Slide = ({ label }: SlideProps) =>{
    return(
        <View style={{width, alignItems:"center", justifyContent:'center'}}>
            <Text  style={[styles.text1]}>{label}</Text>
        </View>
    )
}

export default Slide