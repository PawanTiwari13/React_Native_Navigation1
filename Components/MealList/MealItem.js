import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity,
} from "react-native";
import MealDetails from "../MealDetails";
import React from "react";
import {useNavigation} from "@react-navigation/native";

function MealItem({ id,title, imageUrl, duration, complexity, affordability }) {
  const navigation=useNavigation();
  function selectMealItemHandler(){
    navigation.navigate('MealDetail',{

          mealId:id,
        }
        );
  }

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration}complexity={complexity}affordability={affordability}/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    borderRadius: 8,
    backgroundColor: "white",
    margin: 16,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

});
