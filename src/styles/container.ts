import styled from "styled-components";

export const Container = styled.div`
	/* width: 65rem;
	max-width: 100%;
	margin: 0 auto;
	padding-left: 1rem;
	padding-right: 1rem; */

	@media (min-width: 900px) {
		width: 100%;
		display: grid;
		grid-template-columns: 300px calc(100% - 300px);
	}
`;
