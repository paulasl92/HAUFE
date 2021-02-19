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
         return <li>
          <CharacterModal show={show === c.id} handleClose={handleModalOff}>
            <div><label>Name: </label>{c.name}</div>
            <div><label>Status: </label>{c.status}</div>
          </CharacterModal>
          <button type="button" onClick={() =>handleModalOn(c.id)}>{c.name}</button>
           
         </li>
        })}
      </ul>
    </div>
  );
};

export default CharactersList;