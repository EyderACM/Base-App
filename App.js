import React from "react";
import { StyleSheet, View } from "react-native";
import { ResultCard } from "./components/molecules/ResultCard";
import { ToConvertArea } from "./components/molecules/ToConvertArea";
import { BaseSliderSection } from "./components/molecules/BaseSliderSection";
import { CalculatorOptions } from "./components/molecules/CalculatorOptions";

export default function App() {
  return (
    <View style={styles.container}>
      <ResultCard value={"A23"} fromBase={"Base 10"} toBase={"Base 16"} />
      <ToConvertArea toConvertValue={"125"} />
      <BaseSliderSection baseValues={["1", "2", "3", "4", "5", "6", "7"]} baseTypeText="De base" />
      <BaseSliderSection baseValues={["1", "2", "3", "4", "5", "6", "7"]} baseTypeText="A base" />
      <CalculatorOptions calcKeys={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "B", "C", "D", "E", "F"]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 70,
  },
});
