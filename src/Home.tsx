import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Home = () => {
    const location = useLocation();
    
    return (
        <>
        <h1>
            Hello {location.state.name}!
        </h1>
        <Link to={'/about'} className='link'>About</Link>
        <Link to={'/connexion'} className='link'>Se connecter</Link>
        </>
    )
}

export default Home;