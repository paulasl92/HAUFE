import { useState, useEffect } from "react";
import { getUSerFavs } from "../services/user-service";
import {getFavCharacters} from "../services/rickAndMorty-service";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import ListFav from "../component/ListFav";

const Favs = () => { 
  const [list, setList] = useState([]);
  const [listIds, setListIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavoriteList = async () => {
    try {
        const email = localStorage.getItem("USER-EMAIL");
        const { data } = await getUSerFavs(email);
        const ids = data.data;
        const results = await getFavCharacters(ids);

        const info = results;
        if(info.success){
          setList(info.data);
          setListIds(ids);
          setIsLoading(false);
        }
      } catch (err) {
        return err;
      }
  };

  useEffect(() => {
    fetchFavoriteList();
  }, []);

  return (
    <div>
      { isLoading ? <div className="spinner"><Loader type="ThreeDots" color="#333" height={100} width={100} /></div> : <ListFav listCharacters={list} favList={listIds}/>}
    </div>  
    
  );
};
export default Favs;
