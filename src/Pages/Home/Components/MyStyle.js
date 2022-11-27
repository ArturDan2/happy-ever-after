import React from 'react';
import { Link } from 'react-router-dom';
import mystyle1 from "../../../images/style1ed.jpg"
import mystyle2 from "../../../images/style2ed.jpg"
import mystyle3 from "../../../images/style3ed.jpg"

const MyStyle = () => {
  return (
    <div className='mystyle-container flex-row space-around'>
        <div className='visual-container'>
          <div className='pics'>
            <div className='pic'><img src={mystyle2}></img></div>
            <div className='pic rounded'><img src={mystyle1}></img></div>
            <div className='pic'><img src={mystyle3}></img></div>
          </div>
          <div className="header-and-button">
            <h2>Poznaj mój styl</h2>
            <Link to={"/moj-styl"}><button className='small-device'>ZOBACZ WIĘCEJ</button></Link>
          </div>
        </div>
        <Link to={"/moj-styl"}><button className='large-device'>ZOBACZ WIĘCEJ</button></Link>
    </div>
  )
}

export default MyStyle