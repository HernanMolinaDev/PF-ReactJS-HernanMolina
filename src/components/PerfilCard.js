import react from 'react'
function PerfilCard({nombre, edad,cargo ,imagen}){
    return (
        <div className='perfil-card'>
            <img src={imagen}/>
            <h2>nombre:{nombre}</h2>
            <p>edad:{edad}</p>
            <p>cargo:{cargo}</p>
        </div>
    )
}
export default PerfilCard