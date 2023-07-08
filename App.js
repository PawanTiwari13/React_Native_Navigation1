import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./Screens/MealsOverviewScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MealDetailScreen from "./Screens/MealDetailScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/Favorite-context";
import {Ionicons} from "@expo/vector-icons";
import {FavoritesContext} from "./store/context/Favorite-context";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4baa1",
        drawerActiveTintColor: "#351401",
      }}
    >
      <Drawer.Screen
        name="Categoires"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
            drawerIcon:({color,size})=>(
                <Ionicons name="list" size={size} color={color} />
            ),
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
          drawerIcon:({color,size})=>(
              <Ionicons name="star" size={size} color={color} />
          ),
      }} />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
     <FavoritesContextProvider>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route,navigation})=>{
            //     const cat Id=route.params.categoryId;
            //     return {
            //         title:catId
            //     };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "About  Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </FavoritesContextProvider>

    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
