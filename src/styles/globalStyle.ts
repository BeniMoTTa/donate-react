import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
html, body,button, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input, textarea{
	margin: 0;
	padding: 0;
	border: 0;
    box-sizing: border-box;
	user-select: none;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section{
	display: block;
}
html{
	scroll-behavior: smooth;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
    text-decoration: none;
}
button{
	cursor: pointer;
	border: none;
}

:root {
	--primary100: #FF9370;
	--primary200: #FFE2DA;
	--secundary100: #9B8DB7;
	--black100: #303030;
	--white100: #ffffff;
	--negative100: #E60000;
	--sucess100: #168821;
	--warning100: #FFCD07;
	--info100: #155BCB;
	--gray100: #333333;
	--gray200: #828282;
	--gray300: #E0E0E0;
	--gray400: #F6F6F6;
	--font-size-0: 32px;
	--font-size-1: 26px;
	--font-size-2: 22px;
	--font-size-3: 18px;
	--font-size-4: 16px;
	--font-size-5: 14px;
	--font-size-6: 12px;
	--font-weight-1: 700;
	--font-weight-2: 600;
	--font-weight-3: 400;
	--line-height: 150%;
	--font-family-1: "Anton", sans-serif;
	--font-family-2: "Heebo", sans-serif;
}

body {
	font-family: var(--font-family-2);
	background-color: var(--color-white-1);
}
img {
	display: block;
	max-width: 100%;
}

button,
input,
select, textarea {
	font-family: var(--font-family-2);
	font-size: inherit;
	line-height: inherit;
}

@keyframes slideLeft {
	from {
		opacity: 0;
		transform: translateX(-40px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
}

`;
