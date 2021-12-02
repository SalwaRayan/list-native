import React from "react";
import { Text } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const CountryCard = ({ country, onPress }) => {
  return (
      <Card>
        <Card.Title>{country.name} ({country.alpha2Code}/{country.alpha3Code})</Card.Title>
        <Card.Divider/>
        <Card.Image source={{ uri: `${country.flags.png}` }}/>
          <Text style={{margin: 10}}>
            Capital: {country.capital}
          </Text>
          <Text style={{margin: 10}}>
            Region: {country.region}
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Show languages"
            onPress={onPress}
          />
      </Card>
  );
};

export default CountryCard;
