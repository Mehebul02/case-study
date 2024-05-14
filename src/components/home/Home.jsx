import { Helmet } from "react-helmet-async";
import Hero from "../Headers/Hero";
import Faq from "../Faq";
import Feature from "../Feature";

const Home = () => {
    return (
        <div>
             <Helmet>
      <title>Case Study</title>
    </Helmet>
            <Hero/>
            <Feature/>
            <Faq/>
        </div>
    );
};

export default Home;