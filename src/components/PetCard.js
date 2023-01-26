import React from 'react';

// eslint-disable-next-line no-unused-vars
function petCard({pet, pets, setPets}){
  // const [pets,setPets] = useState([]);
  
  const onDelete = (id) =>{
    setPets(pets.filter((pet) =>pet.id !== id));
 }


  
    const handleDelete = ()=>{
        fetch("http://localhost:3000/characters",{
            method: "DELETE",
            body:JSON.stringify({id: pet.id}),
            headers: {'Content-Type': 'application/json'},
     }).then((response)=>{
        if(response.ok){
            throw new Error("Failed to delete pet");
     } 
    });
    onDelete(pet.id);
    }
    return (
        <div>
          <img src={pet.image} alt={pet.name} />
          <h2>{pet.name}</h2>
          <p>{pet.description}</p>
          <p>Contact Information: {pet.contact}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      );

}
export default petCard

