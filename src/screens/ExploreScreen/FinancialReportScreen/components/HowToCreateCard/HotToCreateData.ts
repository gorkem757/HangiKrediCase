import { ImageSourcePropType, ImageURISource } from "react-native";

export interface HowToCreateItem {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
}

export const HowToCreateData: HowToCreateItem[] = [
  {
    imageSource: {
      uri: "https://statics-hangikredi.mncdn.com/images/hk-thumb-logo.png",
    },
    subtitle:
      "Kredili ürün ödemeleri Finansal Raporunun hesaplanmasında dikkate alınan bir değerdir. Ödemelerin zamanında yapılması finansal sağlığını olumlu etkileyen bir faktördür.",
    title: "Kredili ürün ödeme düzeni",
  },
  {
    imageSource: {
      uri: "https://statics-hangikredi.mncdn.com/images/hk-thumb-logo.png",
    },
    subtitle:
      "Kredili ürün ödemeleri Finansal Raporunun hesaplanmasında dikkate alınan bir değerdir. Ödemelerin zamanında yapılması finansal sağlığını olumlu etkileyen bir faktördür.2",
    title: "Kredili ürün ödeme düzeni2",
  },
  {
    imageSource: {
      uri: "https://statics-hangikredi.mncdn.com/images/hk-thumb-logo.png",
    },
    subtitle:
      "Kredili ürün ödemeleri Finansal Raporunun hesaplanmasında dikkate alınan bir değerdir. Ödemelerin zamanında yapılması finansal sağlığını olumlu etkileyen bir faktördür.3",
    title: "Kredili ürün ödeme düzeni3",
  },
];
