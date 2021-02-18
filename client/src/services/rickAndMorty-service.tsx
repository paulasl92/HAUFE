import {getRequest} from "./axios";
import {fetchCharactersError, fetchCharactersPending, fetchCharactersSuccess } from '../redux/actions/characters-action';

function fetchCharacters() {
    return async dispatch => {
        dispatch(fetchCharactersPending());
        try{
        const res = await getRequest("/rickAndMorty/characters/1")
            dispatch(fetchCharactersSuccess(res));
            return res;
        }
        catch (error){
            dispatch(fetchCharactersError(error));
        }
    }
}

export default fetchCharacters;