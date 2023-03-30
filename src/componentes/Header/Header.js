import React from 'react';
import "./Header.css"

//Imagen
import img from "../Header/marioBros.png";

const Header = ({title}) => {
    return (
        <div className='Header'>
            <h1>{title}</h1>
            <img src={img} alt="Logo Mario-Bros" width="150px"/>
        </div>
    );
};

Header.defaultProps = {
    title:"Mario Bros"
};

export default Header
