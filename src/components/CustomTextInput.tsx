import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
  StyleSheet,
} from "react-native";
import { ColorPalette } from "../styles/ColorPalette";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  labelIcon?: React.FC;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  labelIcon: LabelIcon,
  style,
  inputStyle,
  ...textInputProps
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
          {LabelIcon && <LabelIcon />}
        </View>
      )}
      <TextInput style={[styles.baseInput, inputStyle]} {...textInputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label:{
    fontSize:14,
    fontWeight:"500",
    lineHeight:18,
    color:ColorPalette.Neutral900
  },
  labelWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  baseInput: {
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 6,
    borderColor: ColorPalette.Neutral200,
  },
});

export default CustomTextInput;
