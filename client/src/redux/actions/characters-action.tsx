import {
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_PENDING,
    FETCH_CHARACTERS_SUCCESS,
  } from "../action-types";
  

export function fetchCharactersError(error) {
    return {
        type: FETCH_CHARACTERS_ERROR,
        error: error
    }
}

export function fetchCharactersPending() {
    return {
        type: FETCH_CHARACTERS_PENDING
    }
}

export function fetchCharactersSuccess(characters) {
    var information = characters.data.data.results;
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        characters: information
    }
}
