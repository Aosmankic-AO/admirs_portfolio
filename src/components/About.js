import React from 'react'
import styled from 'styled-components'
import data from '../data'

function About() {
  return (
    
       <main>
       <nav id="nav-wrap">
        <ul id="nav" className="nav">
        <li className="current"><a className="smoothscroll" href="/">Home</a></li>
               <li><a className="smoothscroll" href="./About">About</a></li>
             <li><a className="smoothscroll" href="./Resume">Resume</a></li>
               <li><a className="smoothscroll" href="./Contact">Contact</a></li>
        </ul>
       </nav>
  

   <div className='banner-text'>
       <h1>About Me</h1>
   </div>

  

   </main>

   
 )
}

export default About