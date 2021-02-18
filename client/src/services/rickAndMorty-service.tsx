import {getRequest} from "./axios";
import {fetchCharactersError, fetchCharactersPending, fetchCharactersSuccess, updateCurrentPage } from '../redux/actions/characters-action';

function fetchCharacters( currentPage) {
    return async dispatch => {
        dispatch(updateCurrentPage(currentPage));
        currentPage ++;
        dispatch(fetchCharactersPending());
        try{
        const res = await getRequest(`/rickAndMorty/characters/${currentPage}`)
            dispatch(fetchCharactersSuccess(res));
            return res;
        }
        catch (error){
            dispatch(fetchCharactersError(error));
        }
    }
}

export default fetchCharacters;