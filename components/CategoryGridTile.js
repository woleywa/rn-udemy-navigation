import react from "react";
import { TouchableOpacity, Button, Text, View, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.itemDataContainer} onPress={props.onSelect}>
      <View style={{backgroundColor: props.color}}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemDataContainer: {
    flex: 0.8,
    margin: 20,
    height: 120,
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 5,
  },
});

export default CategoryGridTile;
