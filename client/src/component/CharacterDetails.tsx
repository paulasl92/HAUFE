import { basic_character_information } from "../models/character";

const CharactersDetails = ( details : basic_character_information ) => {
  return (
    <div className="">
        { details.name }
    </div>
  );
};

export default CharactersDetails;