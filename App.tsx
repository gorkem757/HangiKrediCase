import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./src/navigation/TabNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
