import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Ionicons}from '@expo/vector-icons';
function IconButton ({icon,color,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
      <Ionicons name={icon}size={24}color={color}/>
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({


  pressed:{
    opacity:0.7,
  }
})
