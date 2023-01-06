import styled from "styled-components";

export const StyledDashControlPanel = styled.section`
	/* animation: slideLeft 0.4s ease forwards; */
    height: max-content;
    width: 92%;
    max-width: 1000px;
    margin: 32px auto 0;


    & > div:nth-child(1){
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: max-content;
        width: 100%;


        @media (min-width: 500px) {
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        @media (min-width: 900px) {

        }


        & > div:first-child{
            display: flex;
            gap: 18px;
        }

        & > div:last-child{
            h2{
                color: var(--primary100);
                font-size: var(--font-size-1);
                font-family: var(--font-family-1);
                letter-spacing: .5px;
                line-height: var(--line-height);
                font-weight: var(--font-weight-3);

                @media (min-width: 900px) {
                    font-size: var(--font-size-0);
                }

            }
    }
}

`;