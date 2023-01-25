import React from "react";
// eslint-disable-next-line no-undef
console.log(props)

function PetCard(props) {

    return (
        <div className="card">
            <h2>{props.name}</h2>
            <img src={props.image}alt={props.name} />
                <div className="Pet-info">
                    <h3>Pet Description</h3>
                    <ul>
                        {props.description}
                    </ul>

                </div>
                </div>
                );
    }

export default PetCard

