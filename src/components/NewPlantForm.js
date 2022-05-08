import React,{useState} from "react";

function NewPlantForm({addNewPlant}) {
  const[formData, setFormData] = useState({
    "id": '',
    "name": "",
    "image": "",
    "price": ""
  })
  function handleChange(e){
    console.log(formData)
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    addNewPlant(formData)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        onChange={handleChange} 
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        onChange={handleChange}
        />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
