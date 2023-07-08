import { StyleSheet, Text, FlatList, View } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import MealItem from "../Components/MealList/MealItem";
import { MEALS, CATEGORIES } from "../Data/DummyData";
function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId,navigation]);
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id:item.id,
      title: item.title,
      duration: item.duration,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
