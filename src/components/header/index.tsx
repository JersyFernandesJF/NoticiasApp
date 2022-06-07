import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import {Gravatar} from 'react-native-gravatar';


class Header extends Component {

    render(){
        return(
              <View>
             <View style={{ marginTop: 48, marginHorizontal: 34,  flex: 1}}>
             <View style={{ flexDirection: "row", justifyContent:'space-between', alignItems:'center',}}>
          <Text style={{color:'#121212', fontSize:22, fontWeight:'400'}}>News App</Text>
          <Gravatar options={{ 
              email: this.props.email,
              parameters: { "size": "200", "d": "mm" },
              secure: true }}
              style={styles.roundedProfileImage} />
      </View>
      <Text style ={{ color:'#616161', fontSize:18, fontWeight:'400', marginTop: 64}}>Hey, {this.props.name}</Text>
          <Text style={{fontSize: 36, fontWeight:'700', marginTop: 10, marginBottom: 50}}>Find the Latest Updates</Text>
           </View>
           <Text style={{ fontSize: 22, fontWeight:"700", marginLeft:40}}>Feature Stories</Text> 

              </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      
      
    },
    input: {
        borderBottomWidth:1,
        width: 346,
        fontSize:16
    },
    roundedProfileImage: {
     width:55,
      height:55, 
      borderWidth:1,
     borderColor:'#616161', 
     borderRadius:30
   },
  
});




export default Header;