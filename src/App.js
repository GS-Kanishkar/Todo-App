import { useState } from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Additem from './Additem';
import Search from './Search';




function App() {

  const [item , setItem] = useState(JSON.parse(localStorage.getItem('todo_list')));

  const [newItem , setNewItem] = useState('')
  const [searching, setSearching] = useState()


  const handleCheck =(id)=>{
  const arrays=item.map((n)=> (
  id===n.id? {...n, checked: !n.checked } :n
  ))
  return setItem(arrays)

}
const handleDelete =(id)=>{
  const arrays2=item.filter((n)=>(
    id!==n.id
  ))
  setItem(arrays2)
  localStorage.setItem("todo_list",JSON.stringify(arrays2))

}

const handleSubmit =(e) =>{

  e.preventDefault()
  console.log(newItem)
  addNewItems(newItem)
  setNewItem('')
}

const addNewItems = (a) => {
  const newItem = {
    id: (item && item.length) ? item[item.length - 1].id + 1 : 1,
    checked: false,
    name: a,
  };

  const updatedItems = item ? [...item, newItem] : [newItem];

  setItem(updatedItems);
  localStorage.setItem("todo_list", JSON.stringify(updatedItems));
};

  return (
    <div className='App'>
      
     
      <Header title= "To do app" />
      <Additem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit} />
      <Search 
      searching={searching}
      setSearching={setSearching}
      />
      <Content item = {searching ?  item.filter(a=>(a.name).toLowerCase().includes(searching.toLowerCase())) : item}
       setItems={setItem}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
        />
     <Footer 
      item={item}
      /> 
    </div>
  );
}

export default App;
