import styled from "styled-components";

export const StyledFooter = styled.footer`
	background-color: var(--primary200);
	color: var(--primary100);
	height: 110px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
	font-family: var(--font-family-2);
	font-weight: var(--font-weight-2);
	font-size: var(--font-size-4);

	@media (min-width: 900px) {
		position: absolute;
		bottom: 0;
	}
`;
