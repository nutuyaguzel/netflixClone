import React from 'react'
import { useEffect } from 'react';
import { getMovies,getGenres } from '../app/actions/movieAction';
import { useDispatch,useSelector } from 'react-redux';
import Hero from '../components/Hero';
import ListMovies from '../components/ListMovies';


const MainPage = () => {
  const dispatch = useDispatch();
  const state=useSelector((store)=>store.movieReducer)
  console.log(state)
  useEffect(()=>{
    dispatch(getMovies());
    // poluler film verisini çek ve stora aktar

    dispatch(getGenres());
// filmlerin kategori verisini çek ve stora aktar 
  },[]);
  return (
    <div><Hero/>
    {state?.genres.slice(0,10).map((genre)=>(
      <ListMovies title={genre.name}
      fetchUrl={`/discover/movie?with_genres=${genre.id}`}
      
      />
    ))}


    </div>
  )
}

export default MainPage