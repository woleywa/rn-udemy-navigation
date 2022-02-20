import react from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    console.log(itemData)
    return (
      <CategoryGridTile 
      title={itemData.item.title} 
      color={itemData.item.color}
      onSelect={() => {
        navigation.navigate("CategoryMealScreen", {
          categoryId: itemData.item.id,
          screenTitle: itemData.item.title

        })
      }}
        />
      
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    >

    </FlatList>
  )
};

const styles = StyleSheet.create({
});

export default CategoriesScreen;
