import React, { useEffect } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useState } from 'react';
import axios from 'axios';



function App (props) {

  const [monsters, setmonsters] = useState([]);
  const [searchField, setsearchField] = useState(""); 
  const filteredMonsters = monsters.filter((monster) => {
  return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    console.log(filteredMonsters)



  useEffect(() =>  {
    
      async function fetchData() {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');

      setmonsters(result.data);
     }
     fetchData();
   }, []);



function onSearchChange(event){
  setsearchField(event.target.value)
}


return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
        />
        <CardList monsters={filteredMonsters} />
      </div>
);
}
export default App;