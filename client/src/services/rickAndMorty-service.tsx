import {getRequest} from "./axios";
import {fetchCharactersError, fetchCharactersPending, fetchCharactersSuccess, updateCurrentPage } from '../redux/actions/characters-action';
import {initUserFavsAction} from '../redux/actions/fav-action'
function fetchCharacters( currentPage) {
    return async dispatch => {
        await dispatch(updateCurrentPage(currentPage));
        currentPage ++;
        await dispatch(fetchCharactersPending());
        try{
        const res = await getRequest(`/rickAndMorty/characters/${currentPage}`)
            await dispatch(fetchCharactersSuccess(res));
            return res;
        }
        catch (error){
            await dispatch(fetchCharactersError(error));
        }
    }
}

export const loadFavsAction =() =>{
    return async dispatch => {
        const email = localStorage.getItem("USER-EMAIL");
        await dispatch(initUserFavsAction(email));
    }
}

export default fetchCharacters;