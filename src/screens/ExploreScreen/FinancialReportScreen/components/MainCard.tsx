import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { HKButton } from "../../../../components";
import { ColorPalette } from "../../../../styles/ColorPalette";

const MainCard: React.FC<PressableProps & ViewProps> = (props) => {
  return (
    <Pressable style={styles.container} {...props}>
      <View style={[styles.subView, {}]}>
        <Text style={styles.title}>
          Finansal raporunu ücretsiz alarak kredi sağlığını öğrenebilirsin.
        </Text>
        <HKButton title="Finansal Rapor al" variant="primary" />
      </View>
      <View style={[styles.subView, {}]}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "row",
    rowGap: 16,
    backgroundColor: ColorPalette.GenericWhite,
    borderRadius: 12,
  },
  subView: {
    flexDirection: "column",
    height: "100%",
  },
  title: {},
});

export default MainCard;
