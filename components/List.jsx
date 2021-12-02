import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Modal, Provider } from "@ant-design/react-native";
import { View, FlatList, Text, StyleSheet } from "react-native";
import CountryCard from "./CountryCard";

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
    marginVertical: 10,
  },
});

export default function List() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  // const [language, setLanguage] = useState("") // pour faire le filtre
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <Provider>
      {country && (
        <Modal
          title="Languages"
          transparent
          onClose={() => setCountry(null)}
          visible
          closable
        >
          <View>
            <FlatList data={country.languages} renderItem={Language} />
          </View>
        </Modal>
      )}
      <FlatList
        data={countries}
        horizontal
        renderItem={({ item }) => (
          <CountryCard country={item} onPress={() => setCountry(item)} />
        )}
      />
    </Provider>
  );
}

const Language = ({ item }) => {
  return <Text style={styles.center}>{item.name}</Text>;
};
