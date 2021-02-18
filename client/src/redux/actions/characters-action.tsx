import {
    FETCH_CHARACTERS_ERROR,
    FETCH_CHARACTERS_PENDING,
    FETCH_CHARACTERS_SUCCESS,
    UPDATE_CURRENT_PAGE
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
    var pagesCount = characters.data.data.info.pages;
    var information = characters.data.data.results;
    return {
        type: FETCH_CHARACTERS_SUCCESS,
        characters: information,
        pages: pagesCount
    }
}


export function updateCurrentPage(currentPage) {
    return {
        type: UPDATE_CURRENT_PAGE,
        currentPage: currentPage
    }
}
