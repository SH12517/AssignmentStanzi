import React, { useState } from 'react';
import {AiFillEnvironment} from 'react-icons/ai';
import {BiBed,BiBath, BiBuildings,BiArea,BiDollar} from 'react-icons/bi';
import './home.css'
import Data from '../Data/landan.json';

function Home() {
  const [showMore, setShowMore]=useState(false);
  const ViewData = showMore ? Data :Data.slice(0,6);

  return (
    <>
<div className='main-container'>
    {
      Data && ViewData.map( data =>{
        return(
        <div className='sub-container' key={data.id}>
        <div className='container'>
        <div  className='div-container'>
           <div className='image'>
           <img src={data.image}/>
           <div className='text-over'>
            <p className='text'>{data.for}</p>
           </div>
           </div>
           <div className='text-data' >
           <p className='location'>
           <AiFillEnvironment/><span>{data.location}</span>

           </p>
             <h5 className='title'>{data.title}</h5>
             <div className='icons'>
             <div>
             <span><BiBuildings/></span>
               <p>{data.room}</p>
             </div>
             <div>
             <span><BiBed/></span> 
                <p>{data.bed}</p>
             </div>
             <div>
             <span><BiBath/></span>
                <p>{data.bath}</p>
             </div>
             <div>
             <span><BiArea/></span>
             <p> {data.area}</p>
              </div>
              

             </div>
             <div className='footer-part'>
                <span><BiDollar/>7,555/month</span>
                <button className='btn'>Read more</button> 
              </div>
           </div>
           
        </div>

        </div>

        </div>
        )
        })}
    </div>
    <div>{!showMore &&(<button  className='btn btn2' onClick={()=> setShowMore(true)}>Show More</button>)}</div>

    </>
  )
}

export default Home