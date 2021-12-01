import React, {Component} from 'react';
import { useEffect, useState } from "react"
import { ActivityIndicator, View, FlatList } from "react-native"

export default function List() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  if(countries.lenght === 0) {
    return <ActivityIndicator size='large' color='#ef476f'/>
  }

  return (
    <View>
        <FlatList data={countries} render={Country} /> 
    </View>
  )
}

const Country = ({ item }) => {
  return (
    <View key={item.name}>
      <Text>{item.name} ({item.alpha2Code}/{item.alpha3Code})</Text>
      <Text>Capital: {item.capital}</Text>
      <Text>Region: {item.region}</Text>
    </View>
  )
}