import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AboutCard, MainCard } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfosAsync } from "../../../redux/FinancialReport/actions";
import { RootState } from "../../../redux/rootReducer";
import HowToCreateCard from "./components/HowToCreateCard/HowToCreateCard";

const FinancialReportsScreen: React.FC = () => {
  //#region Hooks
  const dispatch = useDispatch();
  const { infos, status, error } = useSelector(
    (state: RootState) => state.info
  );

  //#endregion

  //#region States

  //#endregion

  //#region Effects
  useEffect(() => {
    // Dispatch the fetchInfosAsync action when the component mounts
    dispatch(fetchInfosAsync() as any);
  }, [dispatch]);
  //#endregion

  //#region Functions

  //#endregion

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainCard style={styles.cardStyle} />
        <AboutCard
          style={styles.cardStyle}
          info={infos}
          status={status}
          initialRenderItemLimit={3}
        />
        <HowToCreateCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cardStyle: {
    flex: 1,
    marginBottom: 16,
  },
});

export default FinancialReportsScreen;
