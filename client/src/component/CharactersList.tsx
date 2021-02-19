import  { useState } from "react";
import CharacterModal from "../modals/CharacterModal"

const CharactersList = ( {characters : characters}) => {
  const [show, setShow] = useState(0);

  const handleModalOn = (id : number) => {
    setShow(id);
  };

  const handleModalOff = () => {
    setShow(0);
  };

  return (
    <div className="">
      <ul>
        {characters.map( c => {
         return <li  key={c.id}>
          <CharacterModal show={show === c.id} handleClose={handleModalOff}>
            <div><label>Name: </label>{c.name}</div>
            <div><label>Status: </label>{c.status}</div>
            <div><label>Specie: </label>{c.species}</div>
            <div><label>Gender: </label>{c.gender}</div>
            <div><label>Origin: </label>{c.origin.name}</div>
            <div><label>Location: </label>{c.location.name}</div>
          </CharacterModal>
          <button type="button" onClick={() =>handleModalOn(c.id)}>Details</button>
           
         </li>
        })}
      </ul>
    </div>
  );
};

export default CharactersList;