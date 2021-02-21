import  { useState } from "react";
import CharacterModal from "../modals/CharacterModal"
import CharactersDetails from "./CharacterDetails";
import '../util/styles/characterDetails.scss';
import { updateUserFavsAction } from "../redux/actions/fav-action";
import { useDispatch, useSelector } from "react-redux";

const CharactersList = ( {characters : characters}) => {
  const [show, setShow] = useState(0);
  const dispatch = useDispatch();
  const favList = useSelector(state => {
    return state.authentication.favs;
  })

  const gridFrames = () => {
    const { innerWidth: width } = window;
    return (width > 1000) ?  4 :  2;
  };

  const handleModalOn = (id : number) => {
    setShow(id);
  };

  const addToFavs = async (id : number) => {
    var ids:number[] = [];
    if ( favList && favList.length != 0) ids=favList;
    ids.push(id);
    await dispatch(updateUserFavsAction(ids));
  };

  const removeToFavs = async (id : number) => {
    var ids:number[] = [];
    if ( favList && favList.length != 0) ids=favList;
    const index = ids.indexOf(id);
    if (index > -1) {
      ids.splice(index, 1);
      await dispatch(updateUserFavsAction(ids));
    }
  };

  const isInFavs = (id: number) => {
    if ( favList && favList.length != 0){
      const index = favList.indexOf(id);
      if (index > -1) {
        return true;
      }
    }
    return false;
  }

  const handleModalOff = () => {
    setShow(0);
  };

  const modalInformation = (c) => {
    return (
      <div>
        <div><label>Name: </label>{c.name}</div>
        <div><label>Status: </label>{c.status}</div>
        <div><label>Specie: </label>{c.species}</div>
        <div><label>Type: </label>{c.type}</div>
        <div><label>Gender: </label>{c.gender}</div>
        <div><label>Origin: </label>{c.origin.name}</div>
        <div><label>Location: </label>{c.location.name}</div>
        <img src={c.image}/>
      </div>
    )
  }

  return (
      <div style={{ display: 'grid', gridTemplateColumns: `repeat( ${gridFrames()}, 1fr)`, gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
        {characters.map( c => {
         return <div className="characterCard"  key={c.id}>
            <CharacterModal handleClose={handleModalOff} show={show === c.id}>
              {modalInformation(c)}
            </CharacterModal>
            <CharactersDetails {...c} />
            <div className="characterButtons">
              <button type="button" className="btn__general btnModal" onClick={() =>handleModalOn(c.id)}>More Details</button>
              {isInFavs(c.id) ? <button type="button" className="btn__general favButtons favButtons__btnRemove" onClick={() =>removeToFavs(c.id)}>Remove to Favs</button> : <button type="button" className="btn__general favButtons favButtons__btnAdd" onClick={() =>addToFavs(c.id)}>Add to Favs</button>}
            </div>

          </div>
        })}
      </div>
  );
};

export default (CharactersList);