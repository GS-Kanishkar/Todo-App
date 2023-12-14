import React from 'react'

const Footer = ({item}) => {
  return (
    <div className='footerClass'>
      {
        (item.length<=1) ? (
          <p>number of item : {item.length} </p>
        ) : 
        ( <p>number of items : { item.length}</p> )
      }
    </div>
  )
}

export default Footer