import '../util/styles/characterDetails.scss';
import '../util/styles/characterDetails.scss';
import { useDispatch, useSelector } from "react-redux";
import { updateUserFavsAction } from "../redux/actions/fav-action";

const ListFav = ( {listCharacters : listCharacters , favList: favList} ) => {
    const dispatch = useDispatch();
    const removeToFavs = async (id : number) => {
        var ids:number[] = [];
        if ( favList && favList.length != 0) ids=favList;
        const index = ids.indexOf(id);
        if (index > -1) {
          ids.splice(index, 1);
          await dispatch(updateUserFavsAction(ids));
          window.location.reload();
        }
      };

      const gridFrames = () => {
        const { innerWidth: width } = window;
       return  ((favList && favList.length) <2 || (width < 1000) ) ? 1 : 3;
      };
 
    return (
        <div className="favoriteList" >
          <h1>My list of favorite characters</h1>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat( ${gridFrames()}, 1fr)`, gridGap: '10px', gridAutoRows: 'minMax(100px, auto)'}}>
            {listCharacters.map( c => {
            return <div className="listContainer" key={c.id}>
                <div className="imageList">
                    <img src={c.image} alt={ c.name }/>
                </div>
                <label>{c.name}</label>
                <div className="buttonList">
                <button type="button" className="btn__general favButtons favButtons__btnRemove" onClick={() =>removeToFavs(c.id)}>Remove to Favs</button> 
                </div>
                 </div>
            })}
           </div> 
        </div>
    );
};

export default ListFav;