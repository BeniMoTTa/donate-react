import React from "react";
import { StyledPosts } from "./style";
import PostCard from "./postCard";

const PostsList = ({ user }) => {
	return (
		<StyledPosts>
			<h3>POSTAGENS</h3>
			<ul>
				<PostCard />
				<PostCard />
				<PostCard />
				<PostCard />
			</ul>
		</StyledPosts>
	);
};

export default PostsList;
