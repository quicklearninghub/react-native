import { SAVE_PLACE } from './places-action';
import Place from '../models/Place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PLACE:
            const newPlace = new Place(action.payload.id.toString(), action.payload.title, action.payload.image);
            const updatedPlace = { places: [...state.places, newPlace]};
            return updatedPlace;
        default:
            return state;
    }
}