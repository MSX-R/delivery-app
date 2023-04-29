import { Text, SafeAreaView, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist"; //Voir tailwind config /**/*.tsx pour l'utiliser sur toute l'app */
import { CompositeNavigationProp, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";

export type CustomerScreenNavigationProps = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Customers">, NativeStackNavigationProp<RootStackParamList>>;
const CustomersScreen = () => {
  const tw = useTailwind(); //tailwind = tw
  // const { height } = Dimensions.get("window");
  // const paddingTop = 16; // Valeur du padding top souhaité
  // const safeAreaViewHeight = height - paddingTop; //! avec EXPO, le safeareaview est géré automatiquement    sinon il faut ajouter ca dans le return : style={[styles.container, { height: safeAreaViewHeight }]}

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     paddingTop: paddingTop,
  //   },
  // });

  const navigation = useNavigation<CustomerScreenNavigationProps>();

  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image source={{ uri: "https://links.papareact.com/3jc" }} containerStyle={tw("w-full h-64")} PlaceholderContent={<ActivityIndicator />} />
      <Input placeholder="Recherche par utilisateur" keyboardType="name-phone-pad" value={input} onChangeText={setInput} containerStyle={tw("bg-white px-10 pt-5 pb-0 ")} />
    </ScrollView>
  );
};

export default CustomersScreen;
