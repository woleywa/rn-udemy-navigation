import react from "react";
import {
  TouchableOpacity,
  Button,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTile = (props) => {
  // Below is to use the ripple effect on android (styling option)
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.itemDataContainer} >
      <TouchableCmp onPress={props.onSelect} style={{flex:1}}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  itemDataContainer: {
    flex: 0.8,
    margin: 20,
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: 'hidden'
  },
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
});

export default CategoryGridTile;
