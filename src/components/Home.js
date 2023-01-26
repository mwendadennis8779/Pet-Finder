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
        <div>
            <>Home</>
            <NavBar />
            <About />
            <DisplayLostPet  onDelete={handleDelete}/>
            <Form />
        </div>
    )
}

export default Home;