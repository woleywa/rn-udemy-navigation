import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the MealDetailsScreen</Text>
      <Button title="Go Home" onPress={() => {navigation.popToTop()}} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealDetailsScreen;
