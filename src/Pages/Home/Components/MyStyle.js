import React from 'react'

const MyStyle = () => {
  return (
    <div className='mystyle-container flex-row space-around'>
        <div className='visual-container'>
          <div className='pics'>
            <div className='pic'></div>
            <div className='pic rounded'></div>
            <div className='pic'></div>
          </div>
          <div className="header-and-button">
            <h2>Poznaj mój styl</h2>
            <button className='small-device'>ZOBACZ WIĘCEJ</button>
          </div>
        </div>
        <button className='large-device'>ZOBACZ WIĘCEJ</button>
    </div>
  )
}

export default MyStyle