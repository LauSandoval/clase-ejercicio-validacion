import React from 'react'

const MyInput =({nombre, setNombre, password, setPassword}) => {
 
    return(
        <div className="Formato">
            <input type="text" className = "form-control-sm" placeholder="Ingresa usuario" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <input type="password" className = "form-control-sm" placeholder="Ingresa contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        
    )
}
export default MyInput