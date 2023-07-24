import React from 'react'
import { useState } from 'react'
import AnimalShow from './AnimalShow'
import './app.css'


  function getRandomAnimal(){
    const animals=['bird','cat','cow','gator','horse'];
    return animals[Math.floor(Math.random() * animals.length)]
  };

 function App() {
  const [animals,setAnimals]= useState([]);

  const handleClick = () => {
  setAnimals([...animals,getRandomAnimal()]);
;
 }
  

  

const renderAnimal =  animals.map((animal,index) => {
  return < AnimalShow type ={animal} key= {index}/>
})
  return (
  
    
    <div className="app">
      <button 
      on onClick={handleClick}>
      add animal</button>
     <div className="animal-list"> {renderAnimal}</div> 
      
      
    </div>
  )
}

export default App