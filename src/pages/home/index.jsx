import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import { StyledHomePage } from "./style";

const HomePage = () => {
	return (<StyledHomePage>
        <header className="HomeHeader"></header>
        <section className="HomeList"></section>
        <HomeContact/>
        <Footer/>
    </StyledHomePage>);
};

export default HomePage;
