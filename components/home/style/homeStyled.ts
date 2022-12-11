import Image from "next/image";
import styled from "styled-components";

export const DivFather = styled.div`
background-image: linear-gradient(330deg, #00a4d7 0, #187499 25%, #1f4459 50%, #131a20 75%, #000000 100%);
position: relative;
top:  5rem;
padding: 1rem;
left: 0px;
right: 0px;
box-sizing: border-box;
`

export const MainStyled = styled.main`
position: relative;
box-sizing: border-box;
width: 100%;
`
export const Headerstyled = styled.header`
background-image: url('https://res.cloudinary.com/dqhbskhe7/image/upload/v1670711135/css/background/xth2saawkgqzvgadzmfj.jpg');
background-attachment: fixed;
color: white;
font-size: 3rem;
padding: 4rem;
border-bottom: 3px solid black;
position: relative;
bottom: 16px;
transition: all 2s ease;
text-align: center;
&:hover{
    letter-spacing: 3px;
  
    color: rgba(145, 49, 219, 0.9);
}
`

export const SeccionStyled = styled.section`

`;

export const ArticleStyled = styled.article`
background-color: rgba(225,225,225,0.1);
padding: 1rem 2rem 2rem 2rem ;
margin: 2rem;
color: #fff;
transition: all 4s ease;
&:hover{
    background-color: rgba(100,100,100,0.8);
}

`
export const HeaderProyect = styled.header`
font-size: 3rem;
padding: 4rem;
color: white;
border-bottom: 3px solid white;
width: 100%;
position: relative;
bottom: 16px;
text-align: center;
`

export const PTitule = styled.p`
font-size: 3rem;
text-align: center;
`


export const PBody = styled.p`
font-size: 2rem;

`

export const ContainerStyle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
margin: 2rem;
padding: 2rem;
`

export const SeccionCard = styled.section`
display: flex;
margin: 0.5rem;
padding: 1.5rem;
color: bisque;

flex-direction: column;
justify-content: space-around;
align-items: center;
transition: all 1s ease;
border-radius: 3rem;
background-color:   rgba(145, 49, 219, 0.3);
&:hover{
  
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

}
`

export const StyledImage = styled(Image)`
margin: 2rem;
`

export const ContainerLink = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1rem;
`
export const ArticlePStyle = styled.article`
display: flex;
flex-direction: column;
font-size: 1.5rem;
padding: 1rem;
align-items: center;
width: 25rem;
`