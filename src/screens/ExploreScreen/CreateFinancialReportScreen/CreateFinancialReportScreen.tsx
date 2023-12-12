import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  Alert,
} from "react-native";
import { ColorPalette } from "../../../styles/ColorPalette";
import { HKButton, HKCheckbox, HKInput } from "../../../components";
import { Formik } from "formik";
import * as yup from "yup";
import { StackNavigationProp } from "@react-navigation/stack";

const FormSchema = yup.object({
  name: yup.string().required().min(2),
  surname: yup.string().required().min(2),
  TCKN: yup
    .string()
    .required()
    .min(11)
    .max(11)
    .test("is TCKN numbers only", "TCKN sadece sayı içerebilir", (tckn) => {
      // Regex for only number string
      return /^\d+$/.test(tckn);
    }),
  email: yup.string().required(),
  phoneNumber: yup.string().required().min(8).max(15),
  kvkk: yup
    .boolean()
    .required()
    .oneOf([true], "Aydınlatma metnini okuyup, onaylayın"),
  kvkk2: yup
    .boolean()
    .required()
    .oneOf([true], "Açık rıza metnini okuyup, onaylayın."),
});
type CreateFinancialReportScreenProps = {
  navigation: StackNavigationProp<{}>;
};

const CreateFinancialReportScreen: React.FC<
  CreateFinancialReportScreenProps
> = ({ navigation }) => {
  //#region Functions
  const renderFormDescription = () => {
    return (
      <>
        <Text style={styles.formTitle}>Kişisel bilgiler</Text>
        <Text style={styles.formDescription}>
          Sana özel Finansal Raporunu en doğru sonuçlar ile hazırlayabilmemiz
          için bu bilgilere ihtiyacımız var.
        </Text>
      </>
    );
  };
  //#endregion

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollView}
      >
        <Formik
          initialValues={{
            name: "",
            surname: "",
            TCKN: "",
            email: "",
            phoneNumber: "",
            kvkk: false,
            kvkk2: false,
          }}
          validationSchema={FormSchema}
          onSubmit={(values, actions) => {
            Alert.alert(
              "Rapor hazırlandı!",
              "Detaylar için raporlarım ekranına gidin."
            );
            actions.resetForm();
            // @ts-ignore
            navigation.navigate("BottomTabs");
          }}
        >
          {(props) => (
            <View>
              {renderFormDescription()}
              <View style={[styles.twoInputWrapper, styles.input]}>
                <View style={styles.smallInput}>
                  <HKInput
                    label="Adın"
                    placeholder="Örn.Çağrı"
                    value={props.values.name}
                    onChangeText={props.handleChange("name")}
                    onBlur={props.handleBlur("name")}
                  />
                  {props.touched.name && (
                    <Text style={styles.error}>{props.errors.name}</Text>
                  )}
                </View>
                <View style={[styles.smallInput, { marginLeft: 15 }]}>
                  <HKInput
                    label="Soyadın"
                    placeholder="Örn.Oğuz"
                    value={props.values.surname}
                    onChangeText={props.handleChange("surname")}
                    onBlur={props.handleBlur("surname")}
                  />
                  {props.touched.surname && (
                    <Text style={styles.error}>{props.errors.surname}</Text>
                  )}
                </View>
              </View>
              <HKInput
                label="T.C. Kimlik numaran"
                placeholder="TCKN"
                style={styles.input}
                value={props.values.TCKN}
                onChangeText={props.handleChange("TCKN")}
                keyboardType="numeric"
                onBlur={props.handleBlur("TCKN")}
              />
              {props.touched.TCKN && (
                <Text style={styles.error}>{props.errors.TCKN}</Text>
              )}
              <HKInput
                label="Telefon numaran"
                placeholder="+90"
                style={styles.input}
                value={props.values.phoneNumber}
                onChangeText={props.handleChange("phoneNumber")}
                keyboardType="phone-pad"
                onBlur={props.handleBlur("phoneNumber")}
              />
              {props.touched.phoneNumber && (
                <Text style={styles.error}>{props.errors.phoneNumber}</Text>
              )}
              <HKInput
                label="E-Posta adresin"
                placeholder="ornek@mail.com"
                style={styles.input}
                value={props.values.email}
                onChangeText={props.handleChange("email")}
                keyboardType="email-address"
                onBlur={props.handleBlur("email")}
              />
              {props.touched.email && (
                <Text style={styles.error}>{props.errors.email}</Text>
              )}
              <HKCheckbox
                value={props.values.kvkk}
                onValueChange={(value) => props.setFieldValue("kvkk", value)}
                containerStyle={{ marginBottom: 12, marginTop: 4 }}
                label="Kişisel verilerin işlenmesine ilişkin Aydınlatma Metni’ni okudum."
              />
              <Text style={styles.error}>
                {props.touched.kvkk && props.errors.kvkk}
              </Text>
              <HKCheckbox
                value={props.values.kvkk2}
                containerStyle={{ paddingRight: 6 }}
                onValueChange={(value) => props.setFieldValue("kvkk2", value)}
                label="Açık rıza metni kapsamında kişisel verilerimin işlenmesi için Açık Rıza Metni'ni okudum, onaylıyorum. "
              />
              <Text style={styles.error}>
                {props.touched.kvkk2 && props.errors.kvkk2}
              </Text>
              <HKButton
                title="Devam et"
                variant="secondary"
                style={styles.cta}
                onPress={() => props.handleSubmit()}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 8,
    backgroundColor: ColorPalette.GenericWhite,
  },
  scrollContentContainer: {
    paddingBottom: 36,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  formTitle: {
    fontSize: 20,
    color: ColorPalette.Neutral800,
    fontWeight: "500",
    lineHeight: 28,
  },
  formDescription: {
    fontSize: 14,
    color: ColorPalette.Neutral600,
    fontWeight: "400",
    lineHeight: 18,
    marginTop: 12,
  },
  input: {
    marginBottom: 20,
  },
  twoInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smallInput: {
    flex: 1,
  },
  cta: {
    paddingVertical: 14,
    height: 52,
    marginTop: 32,
  },
  error: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    color: ColorPalette.Secondary500,
  },
});

export default CreateFinancialReportScreen;
