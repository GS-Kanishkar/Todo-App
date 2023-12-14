import React from 'react'

const Footer = ({item}) => {

  const itemCount = item ? item.length : 0;
  return (
    <div className='footerClass'>
      {itemCount <= 1 ? (
        <p>number of item: {itemCount}</p>
      ) : (
        <p>number of items: {itemCount}</p>
      )}
    </div>
  ) 
}

export default Footer 