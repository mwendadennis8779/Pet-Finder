import React,{useState,useEffect} from "react";
import PetCard from "./PetCard"



function DisplayLostPet({onDelete}){
    const[pets,setPets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/characters")
        .then((response) =>response.json())
        .then((data) =>setPets(data))
        .catch((error) =>console.log(error))
    },[]);

    return(
        <div className="pet-list">
            {pets.map((pet) =>(
                <div className="pet-card" >
                <PetCard key={pet.id} pet={pet}  onDelete={onDelete}/>
                </div>
            ))}
        </div>
    );
}

export default DisplayLostPet;