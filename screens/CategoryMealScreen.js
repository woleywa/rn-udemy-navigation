import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesMealScreen = ({ navigation, route }) => {
  // console.log(navigation);
  // console.log(route);
  const catId = route.params.categoryId;


  const selectedCategories = CATEGORIES.find(cat => cat.id === catId);
  
  return (
    //
    <View >
      <Text>This is the CategoriesMealScreen</Text>
      <Text>{selectedCategories.title}</Text>
    <Button title="Go to Details" onPress={ () => {navigation.navigate('MealDetailScreen')}}/>
    <Button title="Go Home" onPress={() => {navigation.popToTop()}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoriesMealScreen;
