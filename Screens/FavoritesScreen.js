import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import MealList from "../Components/MealList/MealList";
import  {FavoritesContext} from "../store/context/Favorite-context";
import {MEALS} from "../Data/DummyData";
import meal from "../models/meal";

function FavoritesScreen  ()  {
 const favoriteMealCtx = useContext(FavoritesContext);
   const favoriteMeals=MEALS.filter(meal=>favoriteMealCtx.ids.includes(meal.id));

   if (favoriteMeals.length===0){
       return <View style={styles.container}>
           <Text style={styles.text}>
               You have no favorite Meals yet
             </Text>
       </View>
   } return (
<MealList items={favoriteMeals}/>  )
}

export default FavoritesScreen

const styles = StyleSheet.create({

   container:{
     flex:1,
justifyContent:'center',
       alignItems:'center',
   },
    text:{
        color:'white',
        fontWeight:'bold',
        marginVertical:150,

        fontSize:20,
        alignSelf:'center'
    }

})




