import React, {useState, useRef} from "react";




function Form({pets, setPets}){
    const [formData, setFormData] = useState({
        image: '',
        contact: '',
        description: '',
    
    })
    
    const newForm = useRef(null)
    
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
    
        setFormData({...formData, [name]:value})
    }
     function handleSubmit(e){
        fetch('http://localhost:3000/characters', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            const newLostPet = [...pets, data]
            console.log(data)
            setPets(newLostPet)
        })

        
     }
    

    return(
        <div>
            <p>Form</p>
            <form onClick={handleSubmit} id ="form" ref={newForm}>
                <input  placeholder="image" name="image" onChange={handleChange}/>
                <input  placeholder="contact " name="contact" onChange={handleChange}/>
                <textarea placeholder="description" name="description" rows={7} onChange={handleChange}/>
                <input  type="submit" value="upload pet"/>
                
            </form>
        </div>
    )
}

export default Form