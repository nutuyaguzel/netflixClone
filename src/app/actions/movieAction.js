import axios from "axios";


//asenkron aksiyon

// thunk ın en büyük faydası aksiyonları dispatch etmeden önce
//async işlemleri yapmamızı saglar.
// bu sayede önce apiye istek atıp verileri çekeriz
//apiden gelen cevabı dispatch adip reduceaa aktarırız.
// asenkron aksiyon 

const options = {
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWJiOTFiYTFlNmUwYjUzMDE0YjFjMjA0N2MzYzdlNiIsInN1YiI6IjY1MWFjZGIxMjIzYThiMDBlMWZhYTYwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JFZZZKqT9Gw-txXVUrfZJgnmF_d7XqlWbAvgg3sJtP8'
    }
  };
  axios.defaults.baseURL = ' https://api.themoviedb.org/3';

export const getMovies=()=>async(dispatch)=>{
    //asenkron işlemler 
    axios.get('/movie/popular',options)
    .then((res)=> console.log(res));

    dispatch({
    type:'SET_MOVIES',
    payload:resizeBy.data
 });
};
export const getGenres = () => (dispatch) => {
    // kategori verisini çek
    axios.get('/genre/movie/list', options).then((res) =>
      dispatch({
        type: 'SET_GENRES',
        payload: res.data.genres,
      })
    );
  };
  


// uzun yol
