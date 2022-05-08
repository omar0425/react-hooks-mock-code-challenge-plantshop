import React, {useState, useEffect} from "react";

import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState(plants)
  
  function handleSearch(e){
  const filteredPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(e.target.value.toUpperCase())
  } )
  setFilteredPlants(filteredPlants)
}
function addNewPlant(newPlant){
const updatedPlants = [...plants,newPlant]
setPlants(updatedPlants)
}
function handleClick(){
  const sortedPlants = plants.slice().sort((a,b) =>{
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    else return 0 
  })
  console.log(sortedPlants)
}
useEffect(() =>{
  setFilteredPlants(plants)
},[plants])
  useEffect (() => {
    fetch ('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => {
      setPlants(data)
      })
    }, [])
  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleSearch= {handleSearch}/>
      <button onClick={handleClick}>Sort By Name</button>
      <PlantList plants= {filteredPlants}/>
      
    </main>
  );
}

export default PlantPage;
