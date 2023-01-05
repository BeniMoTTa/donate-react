import styled from "styled-components";
import image from "../../../../assets/img/img-dash-header-temp.svg";

export const StyledDashboardHeader = styled.header`
	width: 100%;
	height: max-content;
	position:absolute;
	
		div{
			width: 100%;
			height: 120px;
			background: url(${image});
			background-size: cover;
			background-position: center;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 60px;

			h1{
				font-family: var(--font-family-1);
				color: var(--white100);
				font-size: var(--font-size-0);
				letter-spacing: 2.5008px;
			}
		}
`;




/* .hero-section {
	background: url(${image});
	padding: 260px 0;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;

	h1 {
		font-family: var(--font-family-1);
		color: var(--white100);
		font-size: var(--font-size-0);
		letter-spacing: 2.5008px;
	}

	p {
		font-family: var(--font-family-1);
		color: var(--primary100);
		font-size: 20px;
		letter-spacing: 2.5008px;
	}
}

.stats-section {
	display: flex;
	flex-direction: column;
	padding: 25px;
	gap: 35px;
	background-color: var(--primary200);
}



@media (min-width: 700px) {
	.hero-section {
		h1 {
			font-family: var(--font-family-1);
			color: var(--white100);
			font-size: 80px;
			letter-spacing: 2.5008px;
		}

		p {
			font-family: var(--font-family-1);
			color: var(--primary100);
			font-size: 24px;
			letter-spacing: 2.5008px;
		}
	}


} */
