import { Link } from "react-router-dom";

const Home = () => {

    return (
        <>
        <h1>
            Hello world!
        </h1>
        <Link to={'/about'} className='link'>About</Link>
        <Link to={'/connexion'} className='link'>Se connecter</Link>
        </>
    )
}

export default Home;