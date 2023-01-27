import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import DisplayLostPet from "./DisplayLostPet";
import Form from "./Form";

function Home(){

    return(
        <div>
            <>Home</>
            <NavBar />
            <About />
            <DisplayLostPet />
            <Form />
        </div>
    )
}

export default Home