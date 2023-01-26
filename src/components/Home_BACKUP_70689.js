import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const [pets,setPets] = useState([]);

    const handleDelete = (id) =>{
       setPets(pets.filter((pet) =>pet.id !== id));
    }
const navigate = useNavigate()
    return(
<<<<<<< HEAD
        <div>
            <Home/>
            <NavBar />
            <About />
            <DisplayLostPet />
            <Form />
        </div>
=======
        <>
        <div className="landing-page">
            {/* <NavBar  handleDelete={handleDelete}/> */}
            <div className="landing-text">
                <h1>Trying to find your Pet</h1> 
                <button className="find-pet" onClick={() => navigate("/pet")}>Find Pet</button>
            </div>
          
         </div>


        
  

>>>>>>> 14ed79fe36f53a37ef66f2b859b6749d495621a3
    )
}

export default Home;