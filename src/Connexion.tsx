import React, { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"


const Connexion = () => {
    
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value)
        }, []
    )

    const handlePasswordChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value)
        }, []
    )

    const handleConnexionClick = useCallback(() => {
        if (username == "admin" && password == "safeAdmin") {
            navigate('/')
        }
    }, [username, password])

    return (
        <>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={handleUsernameChange}/>
            <label htmlFor="passwrd">Password</label>
            <input type="password" id="passwrd" onChange={handlePasswordChange}/>
            <button onClick={handleConnexionClick}>Se connecter</button>
        </>
    )
}

export default Connexion;