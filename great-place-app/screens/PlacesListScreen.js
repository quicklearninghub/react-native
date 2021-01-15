import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';

const PlacesListScreen = (props) => {

    const [places, setPlaces] = useState([]);

    const updatePlaces = (places) => {
        setPlaces(places);
        return places;
    }
    
    useEffect(() => {
        // console.log('useEffect ' + props.places)
        updatePlaces(props.places);
    });

    {props.navigation.setOptions({
        headerTitle: "All Places",
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Add Place"
              iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
              onPress={() => {
                props.navigation.navigate("NewPlace");
              }}
            />
          </HeaderButtons>
        ),
      })}

    return (
      <View>
        <FlatList
          data={props.places}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <PlaceItem
              image={itemData.item.imageUri}
              title={itemData.item.title}
              address={null}
              onSelect={()=> {
                console.log('Navigating on selection');
                props.navigation.setOptions({ title: itemData.item.title});
                return props.navigation.navigate("PlacesDetail", {placeTitle:  itemData.item.title, placeId: itemData.item.id})}
              } 
            />
          )}
        />
        {/* <Button
          title="Add place"
          onPress={() => props.navigation.navigate("NewPlace")}
        /> */}
      </View>
    );
};

const styles = StyleSheet.create({});

const mapStateToProps = (state) => { 
    console.log('state' + state.places.places);
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps)(PlacesListScreen);