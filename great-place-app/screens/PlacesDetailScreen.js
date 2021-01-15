import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlacesDetailScreen = props => {
    const { placeTitle } = props.route.params;
    return (
      <View>
        <Text>PlacesDetailScreen </Text>
        {props.navigation.setOptions({
          title: placeTitle,
        })}
      </View>
    );
};

const styles = StyleSheet.create({});

export default PlacesDetailScreen;