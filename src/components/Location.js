import React, { useState } from 'react'
import './index.css'

const Location = (props) => {

    //You can use this hook to store the current object(zombie) and move it to another table(location)
    const [currentZombie, setcurrentZombie] = useState({})

    const sendToBackend=(e)=>{
        //Backend Work
        console.log("Backend Work "+e.target.value)
    }
    return (
        <div className="list">
        <p><b>{props.name}</b> - {props.zombielist.length} occupants</p>
            <img src={props.image} height={200} width={200}/>
            {props.zombielist.map(e=>{
                return(
                    <div className="list2">
                    <select className="form-control" onChange={sendToBackend}
                        >
                        <option>Move To...</option>
                        <option value={props.option1}>{props.option1}</option>
                        <option value={props.option2}>{props.option2}</option>
                    </select>

                    <p>ID - {e.id}</p>
                    <p>Name - {e.name}</p>
                    <p>Current Location - {e.currentLocation}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Location
