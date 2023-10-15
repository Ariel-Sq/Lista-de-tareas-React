import React from 'react';

function LogoFreeCode({ logo }) {
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img 
        src={logo}
        className='freecodecamp-logo'
        alt='Logo FreeCodeCamp' />
       </div>
    );
}

export default LogoFreeCode