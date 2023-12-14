import React from 'react';

import Content2 from './Content2';

const Content = ({item,setItem,handleCheck,handleDelete}) => {



  return (
    <div className='contentClass'>
      {item && item.length ?(
        <ul>
        <Content2 item={item}
        setItem={setItem}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
      </ul>
      ):(
        <p>List is completed</p>
      )}
      
    </div>
  )
}

export default Content