import './search.css'


export function Search({onSearch, setUsername}){
    const handleInputChange = (e) => setUsername(e.target.value)

    return(
        <div className="form">
            <h1>Github Search</h1>
            <input type="text" placeholder='Digite um username' onChange={handleInputChange}/>
            <button onClick={onSearch}>Buscar</button>
          </div>
    )
}