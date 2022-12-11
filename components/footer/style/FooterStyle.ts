import Image from "next/image";
import styled from "styled-components";

export const FooterStyled = styled.footer`
display: flex;
width: 104%;
position: relative;
right: 1rem;
top: 3rem;
padding: 2rem;
justify-content: space-around;
background-image: linear-gradient(to bottom left, rgb(0, 191, 255), rgb(137, 69, 177));

`

export const StyledImage = styled(Image)`
transition: all 2s ease;
&:hover{
    transform: rotate(15deg)
}

`