import React from 'react'
import Zombie from '../images/zombie.svg'
const Header = () => {
    return (
        <div>
            <h1>Zombie Manager</h1>
            <img src={Zombie}/>
        </div>
    )
}


export default Header;