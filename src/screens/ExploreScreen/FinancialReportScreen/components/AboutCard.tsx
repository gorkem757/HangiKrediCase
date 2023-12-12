import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { HKButton, HKCard, HKImage } from "../../../../components";
import { ColorPalette } from "../../../../styles/ColorPalette";
import { IInfo } from "../../../../interfaces";
import AboutCardInfoItem from "./AboutCardInfoItem";

interface AboutCardProps extends ViewProps {
  info: IInfo[];
  initialRenderItemLimit: number;
  status: "idle" | "loading" | "succeeded" | "failed";
}
type AboutCardListVariant = "seeMore" | "seeLess";

const AboutCard: React.FC<AboutCardProps> = (props) => {
  //#region States
  const [aboutCardListVariant, setAboutCardListVariant] =
    useState<AboutCardListVariant>("seeMore");
  //#endregion

  //#region Functions
  const getAboutCardListButtonTitle = (): string => {
    if (aboutCardListVariant === "seeLess") {
      return "Daha az gör";
    }
    return "Daha fazla gör";
  };

  //TODO: Return SvgComponent instead
  const getAboutCardListButtonIcon = (): React.FC | string => {
    if (aboutCardListVariant === "seeLess") {
      return ">";
    }
    return "<";
  };

  const handleOnAboutCardListButtonPress = () => {
    if (aboutCardListVariant === "seeLess") {
      setAboutCardListVariant("seeMore");
      return;
    }
    setAboutCardListVariant("seeLess");
  };

  //#endregion

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
        {props.status === "succeeded" && (
          <>
            {props.info?.map((info, index) => {
              if (
                aboutCardListVariant === "seeLess" ||
                index < props.initialRenderItemLimit
              )
                return <AboutCardInfoItem item={info} />;
            })}
            <HKButton
              title={getAboutCardListButtonTitle()}
              variant="text-only"
              onPress={handleOnAboutCardListButtonPress}
              style={styles.aboutCardListButtonStyle}
            />
          </>
        )}
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
  aboutCardListButtonStyle: {
    marginTop: 4,
  },
});

export default AboutCard;
