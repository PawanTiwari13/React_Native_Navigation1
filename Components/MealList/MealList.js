import MealItem from "./MealItem";
import {FlatList, StyleSheet, View} from "react-native";
import React from "react";

function MealList({items}){
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
                data={items}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

