import styled from "styled-components";
export const StyledPosts = styled.section`
	margin: 40px;

	h3 {
		font-family: var(--font-family-1);
		color: var(--secundary100);
		font-size: 36px;
		font-weight: 400;
		line-height: 54px;
		margin-bottom: 60px;
	}

	ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
	}

	li {
		list-style: none;
	}
`;
