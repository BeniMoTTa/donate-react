import React from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import PostsList from "./posts";
import ProfileHeader from "./profileHeader";
import StyledProfile from "./style";

const Profile = () => {
	const { users } = React.useContext(AuthContext);
	const { id } = useParams();

	const user = users.find((user) => user.id === id);

	console.log(user)
	return (
		<StyledProfile>
			<ProfileHeader user={user} />
			<PostsList user={user} />
		</StyledProfile>
	);
};

export default Profile;
