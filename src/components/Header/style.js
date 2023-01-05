import styled from "styled-components";

export const StyledHeader = styled.div`
	@media (min-width: 900px) {
		display: none;
	}

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	background-color: red;
	position: fixed;
	z-index: 5;

	div {
		background-color: var(--white100);
		width: 100%;
		height: 60px;
		display: flex;
		justify-content: space-between;
		padding: 15px;
	}
	img {
		width: 40px;
		height: 40px;
	}
	button {
		margin: 0;
		padding: 0;
	}
	nav {
		position: absolute;
		top: 60px;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--white100);
		padding: 20px;
		animation: menuIn 1s linear;
		animation-duration: 0.5s;
		@keyframes menuIn {
			from {
				transform: translateX(150px);
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	li {
		color: var(--gray100);
		cursor: pointer;
		font-family: var(--font-family-1);
		font-size: var(--font-size-1);
		font-weight: var(--font-weight-3);
		line-height: var(--line-height);
		:hover {
			text-decoration: underline;
		}
	}
`;
