import styled from "styled-components";
export const StyledPosts = styled.section`
	padding-bottom: 60px;
	@font-face {
		font-family: Anton;
		src: url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
	}

	* {
		font-family: Anton;
	}
	margin: 0 40px;
	flex-wrap: wrap;

	> h3 {
		color: var(--secundary100);
		font-size: 1.9rem;
		font-weight: 400;
		line-height: 54px;
	}

	> ul {
		display: flex;
		flex-direction: column;

		li {
			max-width: 400px;
			width: 100%;
			margin-top: 20px;
			margin-bottom: 5px;
		}
	}

	@media (min-width: 900px) {
		> h3 {
			position: relative;
			font-size: 36px;
		}
		> ul {
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-between;
			max-width: 800px;
			> li {
				max-width: 45%;
				height: max-content;
			}
		}
	}
`;
