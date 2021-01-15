import React, {useState} from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import Colors from '../constants/Colors';
import { addPlace } from '../store/places-action';
import ImagePicker from '../components/ImagePicker';

const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();

    const titleHandler = (text) => {
        //You can have validations here
        setTitleValue(text);
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath);
    }

    const savePlaceHandler = () => {
        props.addPlace(titleValue, selectedImage);
        props.navigation.goBack();
    }

    return (
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.textInput} 
            onChangeText={titleHandler}
            value={titleValue}
            />
            <ImagePicker onImageTaken={imageTakenHandler} />
          <Button title='Save Place' color={Colors.primary} onPress={savePlaceHandler} />
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default connect(null, {addPlace})(NewPlaceScreen);