import { useParams } from "react-router-dom";
import PostsList from "./posts";
import ProfileHeader from "./profile/ProfileHeader";
import { StyledProfile } from "./style";

const Profile = () => {
    const {id} = useParams()
    
	return (
		<StyledProfile>
            {id}
            <ProfileHeader/>
			<PostsList />
		</StyledProfile>
	);
};

export default Profile;
