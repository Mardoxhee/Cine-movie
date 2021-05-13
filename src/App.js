import React, {useEffect, useState} from 'react'
import './App.css';
import 'react-slideshow-image/dist/styles.css'
import Header from './components/Header/Header';
import Home from './components/HomeCaroussel/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/MoviesList/Movies';
import axios from 'axios';
import 'animate.css'

import   {MoviesContext} from './components/MoviesContext/MovieContext'



function App() {
  const [Upcomming, setUpcomming] = useState([])
  const [page, setpage]= useState(1)

  const  handlePage = ()=>{
    setpage(page+1)
  }

  const handlepagePrev = ()=>{
    if (page>=2){
      setpage(page-1)
    }
  
   
  }

  useEffect(() => {
   
 const getUpCommingMovies = async ()=>{
          const upCommingMovies = await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=a2b0e74f756a6b4384a15fac30990fad&language=en-US&page=${page}`)
          setUpcomming(upCommingMovies.data.results)
          console.log(upCommingMovies.data.results)
 }
  getUpCommingMovies()
  },[page]);
  return (
    <div >
      <Header/>
      <Home/>
      <MoviesContext.Provider value={Upcomming}>
       <Movies nextPageClic={handlePage} prevPageClic={handlepagePrev} />
      </MoviesContext.Provider>
     
    </div>
  );
}

export default App;
