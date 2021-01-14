import React from 'react';
import './App.css';


function Header(props) {

    return (
        <header className="header">
            <h1> {props.name} </h1>
            <Menu lista={props.lista}></Menu>
        </header>

    );
}

function Menu(props) {
    return (
        <ul className="menu">
            {props.lista.map(lista=> {
                return (
                <li>{ lista }</li>
                )
            })}


        </ul>
    )
} 

export default Header;

