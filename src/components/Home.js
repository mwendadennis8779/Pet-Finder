import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    
const navigate = useNavigate()
    return(
        <>
        <div className="landing-page">
            {/* <NavBar  handleDelete={handleDelete}/> */}
            <div className="landing-text">
                <h1>Trying to find your Pet</h1> 
                <button className="find-pet" onClick={() => navigate("/pet")}>Find Pet</button>
            </div>
          
         </div>
         </>


        
  

    )
}

export default Home;