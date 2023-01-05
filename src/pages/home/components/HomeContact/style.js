import styled from "styled-components";

export const StyledHomeContact = styled.section`
	display: flex;
	flex-direction: column;
	gap: 50px;
	font-family: var(--font-family-2);
	color: var(--black100);
	padding-top: 50px;
	padding-bottom: 50px;

	.contactMap {
		height: 400px;
	}

	.contactText {
		display: flex;
		padding-left: 16px;
		flex-direction: column;
		gap: 16px;	
		padding-top: 32px;

		> h2 {
			font-family: var(--font-family-1);
			font-size: var(--font-size-0);
		}

		> span {
			font-size: var(--font-size-5);
		}

		> form {
			padding-top: 32px;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 24px;

			> input,
			textarea {
				outline: none;
				font-weight: var(--font-weight-2);
				width: 90%;
				border-bottom: 2px solid var(--black100);
			}

			> textarea {
				height: 150px;
				resize: none;
			}

			>button{
				cursor: pointer;
				font-family: var(--font-family-1);
				font-size: var(--font-size-2);
				background: none;
				width: 50px;

				&:hover{
					text-decoration: underline;
				}
			}
		}
	}

	@media (min-width: 900px) {
		flex-direction: row;

		.contactMap {
			width: 50%;
			height: 100%;
		}

		.contactText {
			width: 50%;
			margin: auto 0;
			padding-left: 0px;

			> form {
				> input,
				textarea {
					font-weight: var(--font-weight-2);
					border-bottom: 2px solid var(--black100);
					
				}
			}
		}
	}
`;
