import HomeContact from "./components/HomeContact";
import Footer from "./components/HomeFooter";
import Header from "../../components/Header/Header";
import HomeHeader from "./components/HomeHeader";
import HomeList from "./components/HomeList";
import { StyledHomePage } from "./style";
import AsideMenu from "../../components/AsideMenu";

const HomePage = () => {
  return (
    <StyledHomePage>
      <HomeHeader />
      <HomeList />
      <HomeContact />
      <Footer />
    </StyledHomePage>
  );
};

export default HomePage;
