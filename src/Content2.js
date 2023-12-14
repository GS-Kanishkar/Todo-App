import React from 'react'
import { IoTrash } from "react-icons/io5";

const Content2 = ({item,setItem,handleCheck,handleDelete}) => {
  return (
    <div className='boxheight'>
        {item.map((n)=>(
          <li className='item' key={n.id}>
            <input type='checkbox' checked={n.checked} onChange={()=>handleCheck(n.id) }/>
            <label  style={(n.checked)?{textDecoration : 'line-through'}:null} className='label'  onClick={()=>handleCheck(n.id)}>{n.name} </label> 
            <IoTrash role='button' onClick={()=>handleDelete(n.id)}/>

          </li>
        ))}

    </div>
  )
}

export default Content2