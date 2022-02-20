import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import React from "react";
import { View, Text, Button } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator>
      <ProductsStackNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
      />
      <ProductsStackNavigator.Screen
        name="CategoryMealScreen"
        component={CategoryMealScreen}
        options={({ route }) => { 
          // this route is receiving information from the the "CategoryMealScreen". In this case the information from CATEGORIES
          return {
            title: route.params.text,
          };
        }}
      />
      <ProductsStackNavigator.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
      />
    </ProductsStackNavigator.Navigator>
  );
};

// These are random functions for testing purposes //
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen( {navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
      <Button title="To Actions" onPress={() => {
        navigation.navigate('')

      }}/>
    </View>
  );
}

function DrawerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>DrawerScreen!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const ExampleTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarLabel: "Test" }}
      tabBarOptions={{
        activeTintColor: "red",
      }}
    >
      <Tab.Screen
        name="MealDetailScreen"
        component={ProductsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: (props) => <Ionicons name="ios-home" size={props.size} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="ios-basket" size={props.size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="ios-settings" size={props.size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const myDrawerNavigation = createDrawerNavigator();

const ExampleDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <myDrawerNavigation.Navigator>
        <myDrawerNavigation.Screen
          name="MealsScreens"
          component={ExampleTabNavigator}
          options= {{
            headerShown: false,

          }}
        />

      </myDrawerNavigation.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({});

export default ExampleDrawerNavigator;
