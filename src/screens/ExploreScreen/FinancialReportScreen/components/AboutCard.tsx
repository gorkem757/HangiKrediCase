import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { HKCard, HKImage } from "../../../../components";
import { ColorPalette } from "../../../../styles/ColorPalette";
import { IInfo } from "../../../../interfaces";

interface AboutCardProps extends ViewProps {
  info: IInfo[];
  initialRenderItemLimit: number;
}

const AboutCard: React.FC<AboutCardProps> = (props) => {
  return (
    <View {...props}>
      <HKCard style={styles.container}>
        <Text style={styles.title}>Finansal durumuna dair her şey!</Text>
        <Text style={styles.subtitle}>Finansal Raporunda öğreneceklerin;</Text>
        <View style={styles.financialStatusCard}>
          <HKImage
            source={require("../../../../../assets/images/ReportDetails.png")}
            style={styles.img}
          />
        </View>
        {props.info?.map((info) => (
          <Text>{info.title}</Text>
        ))}
      </HKCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: "column",
    backgroundColor: ColorPalette.GenericWhite,
    borderRadius: 12,
  },
  title: {
    color: ColorPalette.Secondary500,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    marginBottom: 8,
  },
  subtitle: {
    color: ColorPalette.Neutral500,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "400",
    marginBottom: 16,
  },
  financialStatusCard: {
    height: 152,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: ColorPalette.Primary500,
    marginBottom: 16,
  },
  img: {},
});

export default AboutCard;
