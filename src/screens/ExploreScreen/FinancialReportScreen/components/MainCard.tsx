import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { HKButton, HKCard } from "../../../../components";
import { ColorPalette } from "../../../../styles/ColorPalette";
import CustomImage from "../../../../components/CustomImage";

const MainCard: React.FC<PressableProps & ViewProps> = (props) => {
  return (
    <Pressable {...props}>
      <HKCard>
        <View style={[styles.subView, { maxWidth: 200 }]}>
          <Text style={styles.title}>
            Finansal raporunu ücretsiz alarak kredi sağlığını öğrenebilirsin.
          </Text>
          <HKButton title="Finansal Rapor al" variant="primary" />
        </View>
        <View style={[styles.subView, {}]}>
          <CustomImage
            source={require("../../../../../assets/images/FR_3D.jpg")}
            style={styles.img}
          />
        </View>
      </HKCard>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  subView: {
    flexDirection: "column",
    height: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 18,
    alignSelf: "stretch",
    textAlign: "left",
    marginBottom: 12,
  },
  img: {
    width: 88,
    height: 88,
  },
});

export default MainCard;
