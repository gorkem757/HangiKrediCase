import React, { useState } from "react";
import {
  Dimensions,
  ImageSourcePropType,
  ImageURISource,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { HKCard } from "../../../../../components";
import { ColorPalette } from "../../../../../styles/ColorPalette";
import Carousel from "react-native-reanimated-carousel";
import { HowToCreateData } from "./HotToCreateData";
import CustomImage from "../../../../../components/CustomImage";

interface HowToCreateCardProps extends ViewProps {}

const HowToCreateCard: React.FC<HowToCreateCardProps> = (props) => {
  //#region States
  //TODO: Render pagination view with the currentIndex value.
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const width = Dimensions.get("window").width - 64;
  //#endregion

  //#region DynamicStyles
  //#endregion

  return (
    <View {...props}>
      <HKCard style={styles.container}>
        <Carousel
          loop
          width={width}
          height={258}
          autoPlay={true}
          autoPlayInterval={5000}
          data={HowToCreateData}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ item, index }) => (
            <View style={styles.carouselItemWrapper} key={index}>
              <CustomImage
                source={item.imageSource}
                style={styles.carouselImage}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          )}
        />
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
  carouselItemWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  carouselImage: {
    resizeMode: "stretch",
    borderRadius: 12,
    marginBottom: 16,
    width: 311,
    height: 152,
  },
  title: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    color: ColorPalette.Neutral800,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
    color: ColorPalette.Neutral600,
  },
});

export default HowToCreateCard;
