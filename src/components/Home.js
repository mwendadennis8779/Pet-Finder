import React,{useState} from "react";
import NavBar from "./NavBar";
import About from "./About";
import DisplayLostPet from "./DisplayLostPet";
import Form from "./Form";

function Home(){
    const [pets,setPets] = useState([]);

    const handleDelete = (id) =>{
       setPets(pets.filter((pet) =>pet.id !== id));
    };

    return(

        <div className="landing-page">
         <NavBar />
         <div className="landing-text">
          <h1>Trying to find your Pet</h1> 
          <button className="find-pet">Find Pet</button>

         </div>
           

    )
}

export default Home;