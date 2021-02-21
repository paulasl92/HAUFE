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
  const [addFav, setAddFAv] = useState(true);
  const fetchFavoriteList = async () => {
    try {
        const email = localStorage.getItem("USER-EMAIL");
        const { data } = await getUSerFavs(email);
        const ids = data.data;
        if(ids.length !=0 ){
          const results = await getFavCharacters(ids);
          const info = results;
          if(info.success){
            if(ids.length ==1){
              const vec : any = [];
              vec.push(info.data);
              await setList(vec);
            } else {
              await setList(info.data);
            }
          setListIds(ids);
          setAddFAv(false);
        }
        }

        setIsLoading(false);
      } catch (err) {
        return err;
      }
  };

  useEffect(() => {
    fetchFavoriteList();
  }, []);

  return (
    <div>
      { isLoading ? <div className="spinner"><Loader type="ThreeDots" color="#333" height={100} width={100} /></div> : ( addFav ? <h1 className="spinner">Please add a character before</h1> :  <ListFav listCharacters={list} favList={listIds}/>)}
    </div>  
    
  );
};
export default Favs;
