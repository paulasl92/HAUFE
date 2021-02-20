import  { useState } from "react";
import CharacterModal from "../modals/CharacterModal"
import CharactersDetails from "./CharacterDetails";
import '../util/styles/characterDetails.scss';
const CharactersList = ( {characters : characters}) => {
  const [show, setShow] = useState(0);

  const gridFrames = () => {
    const { innerWidth: width } = window;
    return (width > 1000) ?  4 :  2;
  };

  const handleModalOn = (id : number) => {
    setShow(id);
  };

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
            <button type="button" className="btnModal" onClick={() =>handleModalOn(c.id)}>More Details</button>
          </div>
        })}
      </div>
  );
};

export default CharactersList;