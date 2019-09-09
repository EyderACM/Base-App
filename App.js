import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ResultCard } from "./components/molecules/ResultCard";
import { ToConvertArea } from "./components/molecules/ToConvertArea";
import { BaseSliderSection } from "./components/molecules/BaseSliderSection";
import { CalculatorOptions } from "./components/molecules/CalculatorOptions";
import * as bases from './constants/baseValues';
import * as utils from './utils/converter';

export default function App() {
  const [conversionResult, setConversionResult] = useState("");
  const [toConvertValue, setToConvertValue] = useState("");
  const [selectedBase1, setSelectedBase1] = useState("2");
  const [selectedBase2, setSelectedBase2] = useState("4");

  const addValue = (value) => () => {
    setToConvertValue(toConvertValue.concat(value));
  }

  const onDeletePress = () => {
    if(toConvertValue) setToConvertValue(toConvertValue.slice(0, -1));
  }

  const onPressBase1 = (value) => () => {
    setSelectedBase1(value);
  }

  const onPressBase2 = (value) => () => {
    setSelectedBase2(value);
  }

  const onConvertPress = () => {
    if(!toConvertValue) return;
    const values = toConvertValue.split('');
    let selectedBaseDictionary;

    // obtener el diccionario de la base
    Object.keys(bases).forEach(base => {
      if(bases[base].baseValue === selectedBase1) selectedBaseDictionary = bases[base].dictionary; 
    })

    // Revisar si valor introducido forma parte del diccionario
    if(values.find(value => !selectedBaseDictionary.hasOwnProperty(value))) {
      setConversionResult("Invalid value")
      return;
    };

    let conversion = utils.anyBaseToDecimal(toConvertValue, selectedBaseDictionary, selectedBase1);
    if(selectedBase2 !== "10"){
      // Encontramos el diccionario de la segunda base
      let secondBaseDictionary;
      Object.keys(bases).forEach(base => {
        if(bases[base].baseValue === selectedBase2) secondBaseDictionary = bases[base].dictionary; 
      })            
      conversion = utils.decimalToAnyBase(conversion, secondBaseDictionary, selectedBase2)
    }
    setConversionResult(conversion);
  };

  return (
    <View style={styles.container}>
      <ResultCard value={conversionResult} fromBase={`base${selectedBase1}`} toBase={`base${selectedBase2}`} />
      <ToConvertArea toConvertValue={toConvertValue} />
      <BaseSliderSection onSelectBase={onPressBase1} selectedBase={selectedBase1} baseValues={["2", "3", "4", "5", "6", "7", "8", "9", "10", "16"]} baseTypeText="Base original" />
      <BaseSliderSection onSelectBase={onPressBase2} selectedBase={selectedBase2} baseValues={["2", "3", "4", "5", "6", "7", "8", "9", "10", "16"]} baseTypeText="Base deseada" />
      <CalculatorOptions onConvertPress={onConvertPress} onKeyPress={addValue} onDelete={onDeletePress} calcKeys={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]}/>
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
