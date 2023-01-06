import styled from "styled-components";

const StyledProfileHeader = styled.section`
	padding-top: 60px;
	display: flex;
	flex-direction: column;
	gap: 40px;
	margin-bottom: 100px;

	h1 {
		padding: 40px;
		font-size: 4.5rem;
		letter-spacing: 1px;
		font-weight: 400;
		font-family: var(--font-family-1);
		color: var(--primary100);
		background-color: var(--primary200);
	}

	.profileCard {
		margin: 40px;
		overflow: hidden;
		border-radius: 10px;
		max-width: min(800px, 100%);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

		.profileImage img {
			width: 100%;
		}

		.profileBtn {
			padding: 20px 0;
			text-align: center;
			background-color: var(--primary100);
			color: var(--white100);
			width: 100%;
			letter-spacing: 1px;
			border: none;
			font-size: 1.4rem;
			font-family: var(--font-family-1);
			text-decoration: underline;
			transition: 0.3s ease;

			&:hover {
				background-color: var(--secundary100);
			}
		}

		.profileInfo {
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 40px 0;
			border-radius: 0 0 10px 10px;
			background-color: var(--primary200);
			color: var(--primary100);

			h2 {
				font-size: 24px;
				margin-bottom: 10px;
			}

			span {
				font-family: var(--font-family-1);
				font-size: 42px;
			}
		}
	}

	.ourCauseSection {
		margin: 0 40px;

		h2 {
			font-size: 32px;
			margin-bottom: 30px;
			font-weight: 400;
			font-family: var(--font-family-1);
		}

		p {
			max-width: 75ch;
			font-size: 18px;
			color: var(--black100);
			line-height: 1.4;
		}
	}

	@media (min-width: 900px) {
		padding-top: 0px;
	}
`;

export default StyledProfileHeader;
