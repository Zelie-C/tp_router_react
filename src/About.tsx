import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    return (
        <>
        <h1>
            About
        </h1>
        <button onClick={() => navigate('/')}>Home</button>
        </>
    )
}

export default About;