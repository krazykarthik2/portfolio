import React from 'react'
import { Link } from 'react-router-dom'

function Menu(){
    return <div className="d-center gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
    </div>
}
function Header({style={}}) {
  return (
    <div className="w-full justify-between items-center flex bg-glass px-5 bg-black text-white" style={style}>
        <div className="left">Portfolio</div>
        <div className="right">
            <Menu/>
        </div>
    </div>
  )
}

export default Header