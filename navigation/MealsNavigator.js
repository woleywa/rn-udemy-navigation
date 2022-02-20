import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import React from "react";
import { View, Text, Button } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { HeaderTitle } from "react-navigation-stack";

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <NavigationContainer>
      <ProductsStackNavigator.Navigator
        screenOptions={({ route }) => {

          if (route.params) {
            return {
              ...TransitionPresets.ModalSlideFromBottomIOS,
              headerStyle: {
                backgroundColor: Colors.secondarColor,
              },
              title: route.params.screenTitle,
            };
          } else {
            return {
              ...TransitionPresets.ModalSlideFromBottomIOS,
              headerStyle: {
                backgroundColor: Colors.secondarColor,
              },
            };
          }
        }}
        // screenOptions={
        //   ({route}) => {
        //   if (route.params) {
        //     return {
        //       title: route.params.screenTitle,
        //       ...TransitionPresets.ModalSlideFromBottomIOS,

        //     }
        //   }
        // }}
      >
        <ProductsStackNavigator.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
        />

        <ProductsStackNavigator.Screen
          name="CategoryMealScreen"
          component={CategoryMealScreen}
          options={({ route }) => {
            // title: route.params.screenTitle,
          }}
          // this route is receiving information from the the "CategoryMealScreen". In this case the information from CATEGORIES
        />

        <ProductsStackNavigator.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
        />
      </ProductsStackNavigator.Navigator>
    </NavigationContainer>
  );
  // NavigationContainer.screenOptions = {
  //   headerStyle: {
  //     backgroundColor: "blue"
  //   }
  // }
};

export default ProductsNavigator;
