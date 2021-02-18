const CharactersList = ( {characters : characters}) => {

  return (
    <div className="">
      <ul>
        {characters.map( c => {
         return <li>{c.name}</li>
        })}
      </ul>
    </div>
  );
};

export default CharactersList;