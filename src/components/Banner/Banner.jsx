import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY , imageUrl  } from '../../constance/constance'


function Banner() {
  
  const  [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    // to gerate a randome rounded number between 1 to 10;
      var theRandomNumber = Math.floor(Math.random() * 20) + 1;  
    console.log(response.data.results[theRandomNumber])

      setMovie(response.data.results[theRandomNumber])
      
    })
  },[])

  return (
    <div className='banner' style = {{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title:"Movie Name"}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie? movie.overview : "Movie overview"}</h1>
        </div>
        
        <div className="fade">
            
        </div>

    </div>
  )
}

export default Banner