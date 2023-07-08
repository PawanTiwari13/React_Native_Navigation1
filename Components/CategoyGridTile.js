import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import React from "react";

function CategoyGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={[styles.innerContainer, { backgroundColor: color }]}
        onPress={onPress}
      >
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CategoyGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#00000029",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  text: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
  },
});
