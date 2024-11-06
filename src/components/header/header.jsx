import React from "react";
import './header.css'
import githubLogo from "../../assets/githubLogo.png";

export function Header(){
    return(
        <header className='header-top'>
            <img src={githubLogo} alt=""/>
            <ul> Meu Projeto </ul>
        </header>
)
}