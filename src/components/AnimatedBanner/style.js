import styled from "styled-components";

const StyledBanner = styled.div`
	margin: 0 auto;
	white-space: nowrap;
	width: 100%;
	display: flex;
	padding: 60px 0px;
	background-color: var(--primary200);
	overflow: hidden;

	span {
		transition: 0.4s ease;
		display: inline-block;
		padding-left: 10%;
		color: var(--primary100);
		font-size: 4rem;
		font-family: var(--font-family-1);
		animation: scrolling-left1 8s linear infinite;
	}

	@media (min-width: 700px) {
		span {
			font-size: 8rem;
		}
	}

	@keyframes scrolling-left1 {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
`;

export default StyledBanner;
