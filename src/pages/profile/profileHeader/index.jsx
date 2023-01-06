import React from "react";
import StyledProfileHeader from "./style";

const ProfileHeader = ({ user }) => {
	console.log(user)
	return (
		<>
			<StyledProfileHeader>
				<section className="cardSection">
					<h1>{user?.name}</h1>

					<div className="profileCard">
						<div className="profileImage">
							<img
								src={user?.image}
								alt={user?.name}
							/>
						</div>

						<button className="profileBtn">DOE AGORA</button>

						<div className="profileInfo">
							<div className="stats">
								<h2>Nossa meta:</h2>
								<span>$ {user?.goal}</span>
							</div>
							<div className="stats">
								<h2>Arrecadados:</h2>
								<span>$ {user?.raised}</span>
							</div>
						</div>
					</div>
				</section>

				<section className="ourCauseSection">
					<h2>NOSSA CAUSA</h2>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
						voluptatem suscipit expedita cupiditate mollitia voluptate odit hic
						facilis vel repudiandae commodi quia itaque quod iste, fugiat fuga,
						voluptates eaque magnam praesentium quos veniam provident! Sapiente
						soluta excepturi velit quis ipsa?
					</p>
				</section>
			</StyledProfileHeader>
		</>
	);
};

export default ProfileHeader;