import { basic_character_information } from "../models/character";
import '../util/styles/characterDetails.scss';
const CharactersDetails = ( details : basic_character_information ) => {
  return (
    <div className="characterContainer">
        <div className="characterImage">
          <img src={details.image} alt={ details.name }/>
        </div>
        <div className="characterInformation">  
          <h2>{ details.name }</h2>
          <h4>{ details.status } - { details.species }</h4>
          <p>
          <label>Last Known Location: </label>
          { details.origin.name }</p>
          <p>
          <label>First seen in: </label>
          { details.location.name }</p>
        </div>
    </div>
  );
};

export default CharactersDetails;