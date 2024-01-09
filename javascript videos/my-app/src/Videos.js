import React, { useState } from 'react'
import './styles/Videos.css';

const Videos = () => {

    const videolinks=[
    " https://www.youtube.com/embed/pmTFaEyLMgE?mute=1&amp;autoplay=1",
    "https://www.youtube.com/embed/kXZ0JDO18HA?mute=1&amp;autoplay=1",
    "https://www.youtube.com/embed/zMOURNkMecI?mute=1&amp;autoplay=1",
    "https://www.youtube.com/embed/WhycSV7kqr4?mute=1&amp;autoplay=1"

    ]
    const [lastplayed,setLastplayed]=useState(-1);
    const randomYoutube=()=>{
        let randomindex=Math.floor(Math.random()*videolinks.length);
        while(randomindex===lastplayed){
            randomindex=Math.floor(Math.random()*videolinks.length)
        }
    }
      

    
 
  return (
    <div className='leftbar'>
      <nav>
        <ul>
           <li ><a href={randomYoutube()} target="_blank" rel='noopener noreferrer'>Video</a> </li>
          
               
            
        </ul>
      </nav>
    </div>
  )
}

export default Videos
