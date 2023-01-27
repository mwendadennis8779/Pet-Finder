import React,{useState,useEffect} from "react";
import PetCard from "./PetCard"



function DisplayLostPet({onDelete,pets,setPets}){
    

    useEffect(() => {
        fetch("http://localhost:3000/characters")
        .then((response) =>response.json())
        .then((data) =>setPets(data))
        .catch((error) =>console.log(error))
    },[]);

    return(
        <div className="pet-list">
            <div className="pet-container">
            {pets.map((pet) =>(
                <div className="pet-card" >
                <PetCard key={pet.id} pet={pet}  onDelete={onDelete} pets={pets} setPets={setPets}/>
                </div>

            ))}
            </div>
        </div>
    );
}

export default DisplayLostPet;