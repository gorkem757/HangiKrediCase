import { StyleSheet, Text, View } from "react-native";
import { HKTouchableOpacity } from "../../../components";
import { ColorPalette } from "../../../styles/ColorPalette";

interface GridButtonsProps {
  data: FinancialButton[];
}

export interface FinancialButton {
  title: string;
  icon: React.JSX.Element;
  onPress: () => void;
}

const GridButtons: React.FC<GridButtonsProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <HKTouchableOpacity
          key={index}
          style={styles.financialButton}
          onPress={item.onPress}
        >
          {item.icon}
          <Text style={styles.buttonTitle}>{item.title}</Text>
        </HKTouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  financialButton: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: ColorPalette.GenericWhite,
    borderRadius: 12,
    flexDirection: "row",
    width: 166,
    marginBottom: 12,
  },
  buttonTitle: {
    marginLeft: 12,
    width: "100%",
  },
});

export default GridButtons;
