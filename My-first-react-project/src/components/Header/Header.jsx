import React from 'react';

import './Header.css';

const Header = ({ isLoggedIn, onLogIn, onLogOut, name}) => {
    console.log('Header:', isLoggedIn);
    let onClickCallback = onLogIn;
    let buttonText = 'LogIn';

    if(isLoggedIn){
        onClickCallback = onLogOut;
        buttonText = 'LogOut'
    }
    return (
        <nav className="navbar header">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-center">My React Blog</span>
                {isLoggedIn ? <p>{name}</p> : null} 
                <button onClick={onClickCallback}>{buttonText}</button>
            </div>
        </nav> 
    )
}

export { Header };
