import React,{useState} from 'react'
import { BsGithub} from "react-icons/bs";
import {FaDev} from "react-icons/fa"
function Navbar() {

  return (
    <div className='navbar'>
      <h1>WordIT</h1>
      <div className="link">
      <a href="https://github.com/singharyan1007/Wordit" target='_blank' rel='noopener noreferrer'><BsGithub className='font'/></a>
      <a href="http://" target="_blank" rel="noopener noreferrer"><FaDev className='font'/></a>     
      </div>
    </div>
  )
}

export default Navbar