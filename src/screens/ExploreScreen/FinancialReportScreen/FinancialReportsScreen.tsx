import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { AboutCard, MainCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfosAsync } from "../../../redux/FinancialReport/actions";
import { RootState } from "../../../redux/rootReducer";
import HowToCreateCard from "./components/HowToCreateCard/HowToCreateCard";
import { ColorPalette } from "../../../styles/ColorPalette";
import { HKButton } from "../../../components";
import { StackNavigationProp } from "@react-navigation/stack";

type FinancialReportsScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const FinancialReportsScreen: React.FC<FinancialReportsScreenProps> = ({
  navigation,
}) => {
  //#region Hooks
  const dispatch = useDispatch();
  const { infos, status, error } = useSelector(
    (state: RootState) => state.info
  );
  //#endregion

  //#region Effects
  useEffect(() => {
    // Dispatch the fetchInfosAsync action when the component mounts
    dispatch(fetchInfosAsync() as any);
  }, [dispatch]);
  //#endregion

  //#region Functions
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <HKButton
          style={styles.ctaButton}
          title="Finansal Rapor al"
          variant="secondary"
          // @ts-ignore
          onPress={() => navigation.navigate("CreateFinancialReportScreen")}
        />
      </View>
    );
  };
  //#endregion

  // if (status !== "succeeded" || error) {
  //   // TODO: Return skeleton for the AboutCardSection instead of not returning anything.
  // }
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <MainCard style={styles.cardStyle} />
        <AboutCard
          style={styles.cardStyle}
          info={infos}
          status={status}
          initialRenderItemLimit={3}
        />
        <HowToCreateCard />
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 36,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cardStyle: {
    flex: 1,
    marginBottom: 16,
  },
  footer: {
    height: 92,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    paddingBottom: 24,
    alignSelf: "center",
    borderTopWidth: 1,
    borderColor: ColorPalette.Neutral300,
    backgroundColor: ColorPalette.GenericWhite,
    width: Dimensions.get("window").width,
  },
  ctaButton: {
    paddingVertical: 14,
    width: "100%",
  },
});

export default FinancialReportsScreen;
