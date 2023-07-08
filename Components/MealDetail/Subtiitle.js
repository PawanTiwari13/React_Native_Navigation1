import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Subtiitle  ({children}) {
  return (
      <View style={styles.subContainer}>
          <Text style={styles.subtitle}>{children}</Text>
      </View>

  )
}

export default Subtiitle

const styles = StyleSheet.create({
    subtitle:{
        color:'#e2b497',
        fontWeight:'bold',
        fontSize:18,
        padding:6,
        borderBottomColor:'white',
        borderBottomWidth:2,
        textAlign:'center'
    },
    subContainer:{
        padding:6,
        marginHorizontal:12,
        marginVertical:4,
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
    }
});
