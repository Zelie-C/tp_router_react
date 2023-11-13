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
            navigate('/', {state: {name: username}})
        }
    }, [username, password])

    return (
        <>
            <div className="connexion-form">
                <div className="input-label">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={handleUsernameChange}/>
                </div>
                <div className="input-label">
                    <label htmlFor="passwrd">Password</label>
                    <input type="password" id="passwrd" onChange={handlePasswordChange}/>
                </div>
                <button onClick={handleConnexionClick}>Se connecter</button>
            </div>
        </>
    )
}

export default Connexion;