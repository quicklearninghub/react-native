import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlacesDetailScreen from '../screens/PlacesDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors'
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const PlacesNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PlacesListScreen">
        <Stack.Screen
          name="Places"
          component={PlacesListScreen}
          options={{
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primary,
          }}
        />
        <Stack.Screen name="PlacesDetail" component={PlacesDetailScreen} />
        <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PlacesNavigator;