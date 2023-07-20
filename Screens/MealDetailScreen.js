import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useContext} from 'react'
import {useLayoutEffect} from "react";
import {MEALS} from "../Data/DummyData";
import MealDetails from "../Components/MealDetails";
import Subtiitle from "../Components/MealDetail/Subtiitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";
import {FavoritesContext} from "../store/context/Favorite-context";

function MealDetailScreen({route,navigation}) {
    const favoriteMealsCtx=useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite=favoriteMealsCtx.ids.includes(mealId);
   function changeFavoriteStatusHandler(){
       if (mealIsFavorite){
           favoriteMealsCtx.removeFavorite(mealId);
       }else {
           favoriteMealsCtx.addFavorite(mealId);
       }
console.log("Your Favorite Meal");
   }
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerRight:()=>{
              return <IconButton
                  icon={mealIsFavorite?'star':'star-outline'}
                  color='white'
                  onPress={changeFavoriteStatusHandler}/>
          }
      });
    },[navigation,changeFavoriteStatusHandler])
    return (
        <ScrollView style={styles.rootContainer}>

            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}> {selectedMeal.title}</Text>
            <MealDetails affordability={selectedMeal.affordability} complexity={selectedMeal.complexity}
                         duration={selectedMeal.duration}
            textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
<Subtiitle>Ingredients</Subtiitle>
<List data={selectedMeal.ingredients}/>
           <Subtiitle> Steps</Subtiitle>

            <List data={selectedMeal.steps}/>
            </View>
            </View>
            </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer:{
      marginBottom:32,
    },
    image: {
        width: '100%',
        height: 350,
    }, title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText:{
        color:'white'
    },
listContainer:{
        width:'80%'
},
    listOuterContainer:{
        alignItems:'center'
    }
})
