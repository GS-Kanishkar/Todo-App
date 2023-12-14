import React from 'react'

const Search = ({searching,setSearching}) => {
  return (
    <div>
        <form className='searchForm' onSubmit={(e)=>{e.preventDefault()}} >
            <input type='text' 
            placeholder='search'
            value={searching}
            onChange={(e)=>{setSearching(e.target.value)}}
            />
            
        </form>
    </div>
  )
}

export default Search