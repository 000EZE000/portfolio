
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
export const NavBar = styled.nav`
width: 100%;
top: 0px;
right: 0px;
position: fixed;
background-image: linear-gradient(to bottom right, rgb(0, 191, 255), rgb(137, 69, 177));
z-index: 100;
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
padding: 1rem;
margin: 0.5rem;
text-decoration: none;
color: white;
cursor: pointer;
border-radius: 2rem;
transition: all 2s ease;
font-size: 1.4rem;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
&:active{
   background-color: black;
}

`