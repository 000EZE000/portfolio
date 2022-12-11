
import styled from "styled-components";
import Link from "next/link";

export const LinkStyle = styled(Link)`
padding: 1.5rem;
font-size: 1.5rem;
text-align: center;
margin: 0.5rem;
width: 18rem;
transition: all 2s ease;
background-color: rgba(225,225,225,0.4);
border-radius: 3rem;
&:hover{
    letter-spacing: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
&:active{
    box-shadow: rgba(225,225,225,0.4) 0px 5px,rgba(225,225,225,0.4) 0px 5px, rgba(225,225,225,0.4) 0px 5px;
}
`