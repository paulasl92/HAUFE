import {FETCH_CHARACTERS_PENDING, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR} from '../action-types';

const initialState = {
    pending: false,
    characters: [],
    error: null
}

const charactersReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FETCH_CHARACTERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_CHARACTERS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                pending: false,
                characters: action.characters
            }
        default: 
            return state;
    }
};

export default charactersReducer;

export const getCharacters = (state) =>{
    return state.charactersReducer.characters;
}
export const getCharactersPending  = (state) =>{
    return state.charactersReducer.pending;
}
export const getCharactersError = (state) =>{
    return state.charactersReducer.error;
}