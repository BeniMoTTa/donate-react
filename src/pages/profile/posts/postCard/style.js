import styled from "styled-components";
export const StyledCard = styled.li`
	img {
		object-fit: cover;
		object-position: center;
	}

	h2 {
		color: var(--gray100);
        font-family: var(--font-family-1);
		margin-top: 13px;
		margin-bottom: 5px;
		font-size: 24px;
		font-weight: 400;
		line-height: 30px;
	}

	p {
		color: var(--black100);

		font-size: 10px;
		font-weight: 400;
		line-height: 15px;
	}

	button {
		margin-top: 10px;
		padding: 10px 30px;

		background-color: var(--primary200);
		color: var(--primary100);
	}
`;
