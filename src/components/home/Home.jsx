import { Helmet } from "react-helmet-async";
import Hero from "../Headers/Hero";

const Home = () => {
    return (
        <div>
             <Helmet>
      <title>Case Study</title>
    </Helmet>
            <Hero/>
        </div>
    );
};

export default Home;