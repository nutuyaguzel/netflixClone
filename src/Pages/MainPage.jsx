import React from 'react'
import { useEffect } from 'react';
import { getMovies,getGenres } from '../app/actions/movieAction';
import { useDispatch,useSelector } from 'react-redux';
import Hero from '../components/Hero';


const MainPage = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getMovies());
    // poluler film verisini çek ve stora aktar

    dispatch(getGenres());
// filmlerin kategori verisini çek ve stora aktar 
  },[]);
  return (
    <div><Hero/></div>
  )
}

export default MainPage