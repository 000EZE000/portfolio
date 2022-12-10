
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
export const NavBar = styled.nav`
width: 100%;
top: 0px;
right: 0px;
position: fixed;
background-image: linear-gradient(to bottom right, rgb(0, 191, 255), rgb(137, 69, 177));
`;
export const ContentStyled = styled.div`
margin: 0%;
padding: 0.5rem;
display: flex;
justify-content: center;
`;
const hover = keyframes`
`;
export const LinkStyle = styled(Link)`
padding: 0.7rem;
margin: 0.5rem;
text-decoration: none;
color: white;
cursor: pointer;
transition: all 2s ease;
font-size: 1.4rem;
&:hover{
   background-color: black;
   border-radius: 1rem;
}
&:active{
    border-top: 2px solid black;
}
`