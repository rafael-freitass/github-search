import React from "react";
import './user-card.css'
import octodex_lab from '../../assets/octodex_lab.png'
import octodex from '../../assets/octodex.png'

export function UserCard({userData, notFound}){
    return(
        <div className="user-card">
            {!userData && !notFound ? (
                <div className="initial">
                    <img src={octodex_lab} alt="Octodex-Lab" />
                    <h2>Busque um nome de usuário</h2>
                </div>
            ) : notFound ? (
                <div className="notFound">
                    <img src={octodex} alt="Avatar-Pesquisa"/>
                    <h2>Usuário não encontrado</h2>
                </div>
            ) : (
                <div className="found"> 
                    <img src={userData.avatar_url} alt="Avatar" />
                    <h1>{userData.name || "Nome não disponível"}</h1>
                    <h3>{userData.bio || "Sem bio disponível"}</h3>
                    <p>Seguidores: {userData.followers}</p>
                    <p>Seguindo: {userData.following}</p>
                    <p>Repositórios: {userData.public_repos}</p>
                </div>
            )}
        </div>
    )
}