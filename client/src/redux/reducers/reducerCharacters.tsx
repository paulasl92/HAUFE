import {FETCH_CHARACTERS_PENDING, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR, UPDATE_CURRENT_PAGE} from '../action-types';
const initialState = {
    pending: false,
    characters: [],
    error: null,
    pages: 1,
    currentPage: 0
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
                characters: action.characters,
                pages: action.pages
            }
        case UPDATE_CURRENT_PAGE:
             return {
                ...state,
                pending: false,
                currentPage: action.currentPage
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

export const getPagesCount = (state) =>{
    return state.charactersReducer.pages;
}

export const getCurrentPage = (state) =>{
    return state.charactersReducer.currentPage;
}

