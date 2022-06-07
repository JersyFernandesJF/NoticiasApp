import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const Post =(props) => {

   const {
      title,
      urlToImage,
     
   } = props
        return(
            <TouchableOpacity>
            <View style={{ alignItems: 'center'}}>
                 <View style={{ flexDirection:'row',  marginTop:24 }}>
                        <Image resizeMode='cover'  source={{uri:urlToImage}} style={{ width:110, height:90}}/>
                    <View style={{ flexDirection:'column', marginHorizontal:18}}>
                       <Text style={{ fontSize: 18, width: 210}}
                        numberOfLines={2}
                       >{title}...</Text>
                       <Text style={{ fontSize: 15, marginTop: 8}}>Read news</Text>
                    <View style={{  borderWidth: 1, width: 60, marginTop: 4}}/>
                    </View>
                    </View>
           </View>
           </TouchableOpacity>

        )
 


}
export default Post

