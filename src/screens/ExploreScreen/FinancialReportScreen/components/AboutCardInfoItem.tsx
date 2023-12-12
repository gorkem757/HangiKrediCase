import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { IInfo } from "../../../../interfaces";
import { CreditIconSvg } from "../../components/svgs";
import { ColorPalette } from "../../../../styles/ColorPalette";

interface AboutCardInfoItemProps extends ViewProps {
  item: IInfo;
  contentContainerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
}

const AboutCardInfoItem: React.FC<AboutCardInfoItemProps> = ({
  item,
  style,
  contentContainerStyle,
  titleStyle,
  subtitleStyle,
  ...props
}) => {
  //TODO: Write a mapper function to get the icon for each item for that we also will need a icon key or smt to match the response objects with the icons using dummy icon for now
  const mappedItemWithIcon = { ...item, icon: <CreditIconSvg /> };

  return (
    <View style={[styles.container, style]} {...props}>
      {mappedItemWithIcon.icon}
      <View style={[styles.contentContainer, contentContainerStyle]}>
        <Text style={[styles.title, titleStyle]}>
          {mappedItemWithIcon.title}
        </Text>
        <Text style={[styles.subtitle, subtitleStyle]}>
          {mappedItemWithIcon.subtitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    flexDirection: "row",
    marginBottom: 12,
  },
  contentContainer: {
    paddingBottom: 12,
    marginLeft: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    color: ColorPalette.Neutral800,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    color: ColorPalette.Neutral600,
  },
});

export default AboutCardInfoItem;
