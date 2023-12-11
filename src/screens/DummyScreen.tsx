import React from "react";
import { View,Text, StyleSheet } from "react-native";

const DummyScreen: React.FC = () => {
  //#region Hooks
  
  //#endregion

  //#region States
  
  //#endregion

  //#region Functions

  //#endregion

  return (
    <View style={styles.container}>
      <Text>Dummy Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default DummyScreen;
