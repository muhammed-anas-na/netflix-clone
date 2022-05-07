import React from 'react'
// import YouTube from 'react-youtube'
import "./RowPosters.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import { API_KEY, imageUrl , youtube_base_url} from '../../constance/constance'
import ReactPlayer from "react-player/youtube";

function RowPosters(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')


  useEffect(() => {
    axios.get(props.url).then(response => {
      // console.log(response.data)
      setMovies(response.data.results)
    }).catch(err => {
      //alert(err)
    })
  });




  const handleMovie = (movie) => {
    console.log(movie)
    axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      console.log("Response movie key = "+response.data.results[0].key)
      // if (response.data.results.length !== 0) {
      //   setUrlId(response.data.results[0].key)
      // } else {
      //   console.log("Array Empty");
      // }
      if (urlId) {
        console.log("URl id is true")
        setUrlId("")
        console.log(urlId)
        
      }else{
        console.log("Else");
        setUrlId(response.data.results[0].key)
        console.log(urlId)
      }
      
    })
    
  }

//   const handleMovie = (movie) => {
//     if(urlId){
//         setUrlId("");
//     } else {
//         movieTrailer(movie?.name || "")
//         .then((url) => {
//             const urlParams = new URLSearchParams(new URL(url).search);
//             setUrlId(urlParams.get('v'));
//         })
//         .catch(() => console.log('Temporary Unavailable'))
//     }
//     console.log(urlId);
// }

// const opts = {
//   height: '390',
//   width: '640',
//   playerVars: {
//     // https://developers.google.com/youtube/player_parameters
//     autoplay: 1,
//   },
// }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj, index) =>
            <img key={obj.id} onClick={() => handleMovie(obj)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
          )

        }
      </div>
      {/* <YouTube className='trailer-player' title='player' onError={()=>{
        console.log("Error in playing the trailer")
      }} videoId="2g811Eo7K8U" opts={opts}/> */}

      {
        urlId && <ReactPlayer
        url= {youtube_base_url+urlId}
        controls={true}
        width='100%'
        playing={true}
      />
      
      }


    </div>
  )
}

export default RowPosters




//ract youtube/lazy
