import React, { useState } from "react";
import './App.css'
import { Header } from './components/header/header';
import { Search } from './components/search/search';
import { UserCard } from './components/user-card/user-card';
import axios from 'axios';

function App() {

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false)


  const handleSearch = async () => {
    await axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      setUserData(response.data)
      setNotFound(false) 
    })
    .catch((error) => {
      console.error("Erro ao buscar o usuario:", error)
      setUserData(null)
      setNotFound(true)
    })
  }

  return (
    <>
    <Header/>
    <div className='container-app'>
      <Search onSearch={handleSearch} setUsername={setUsername} />
      <UserCard userData={userData} notFound={notFound}/>
    </div>
    </>
  )
}

export default App
