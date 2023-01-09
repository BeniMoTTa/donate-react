import StyledProfileHeader from "./style";
import "react-toastify/dist/ReactToastify.css";

const ProfileHeader = ({ user, totalRaised, openModal }) => {
	if (!user) return null;	


	return (
		<>
			<StyledProfileHeader>
				
				<section className="cardSection">
					<h1>{user.name.toUpperCase()}</h1>

					<div className="profileCard">
						<div className="profileImage">
							<img src={user.image} alt={user.name} />
						</div>

						<button onClick={openModal} className="profileBtn">
							DOE AGORA
						</button>

						<div className="profileInfo">
							<div className="stats">
								<h2>Nossa meta:</h2>
								<span>$ {(+user.goal).toLocaleString()}</span>
							</div>
							<div className="stats">
								<h2>Arrecadados:</h2>
								<span>$ {totalRaised? totalRaised.toLocaleString() : 0}</span>
							</div>
						</div>
					</div>
				</section>

				<section className="ourCauseSection">
					<h2>NOSSA CAUSA</h2>

					<p>{user.description}</p>
				</section>
			</StyledProfileHeader>
		</>
	);
};

export default ProfileHeader;
