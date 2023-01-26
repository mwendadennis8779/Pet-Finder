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
<<<<<<< HEAD
        <div>
            <Home/>
            <NavBar />
            <About />
            <DisplayLostPet />
            <Form />
        </div>
=======
=======

>>>>>>> e8679a4446b8736fc2f6b70a764ae39c36638a49
        <>
        <div className="landing-page">
            {/* <NavBar  handleDelete={handleDelete}/> */}
            <div className="landing-text">
                <h1>Trying to find your Pet</h1> 
                <button className="find-pet" onClick={() => navigate("/pet")}>Find Pet</button>
            </div>
          
         </div>


        
  

<<<<<<< HEAD
>>>>>>> 14ed79fe36f53a37ef66f2b859b6749d495621a3
=======

>>>>>>> e8679a4446b8736fc2f6b70a764ae39c36638a49
    )
}

export default Home;