import { Link } from "react-router-dom";
import Logo from "../../assets/img/left-logo-dark.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { AsideDiv, AsideFooter, ButtonDiv } from "./style";

const AsideMenu = () => {

	return (
		<AsideDiv>
			<div className="headerAside">
				<div>
					<img src={Logo} alt="" />
				</div>
			</div>

			<ButtonDiv>
				<Link to="/home" className="hoverUnderLineAnimation">
					Home
				</Link>

				<Link to="/login" className="hoverUnderLineAnimation">
					Login
				</Link>

				<Link to="/register" className="hoverUnderLineAnimation">
					Register
				</Link>

				<Link to="/profile" className="hoverUnderLineAnimation">
					Profile
				</Link>

				<Link to="/dashboard" className="hoverUnderLineAnimation">
					Dashboard
				</Link>
			</ButtonDiv>

			<AsideFooter>
				<div className="socialMedia">
					<FaFacebookF />
					<FaTwitter />
					<ImInstagram />
				</div>

				<div className="divContact">
					<p>(**)*******-**</p>
					<p>doGood@mail.com</p>
				</div>
			</AsideFooter>
		</AsideDiv>
	);
};

export default AsideMenu;
