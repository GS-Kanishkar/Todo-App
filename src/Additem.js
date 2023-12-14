import React from 'react'
import {FaPlus} from 'react-icons/fa'

const Additem = ({newItem,setNewItem, handleSubmit}) => {
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit} >
            <label>Add item</label>
            <input type='text' 
            value={newItem} 
            onChange ={(e)=>setNewItem(e.target.value)}

            
            />
            <button type='submit'  >
                <FaPlus />
            </button>
        </form>
    </div>
  )
}

export default Additem