import { CATEGORIES } from "../Data/DummyData";
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import CategoyGridTile from "../Components/CategoyGridTile";

function CategoriesScreen({ navigation }) {
  function rederCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoyGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={rederCategoryItem}
      />
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({});
