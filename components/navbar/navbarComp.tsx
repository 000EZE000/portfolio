import { NavBar, ContentStyled, LinkStyle } from './style'
export default function Nav(): JSX.Element {
    return <NavBar>
        <ContentStyled>
            <LinkStyle href={'/'}>Inicio</LinkStyle>
            <LinkStyle href={'/about'}>Sobre Mi</LinkStyle>
            <LinkStyle href={'/skills'}>Habilidades</LinkStyle>
            <LinkStyle href={'/studies'}>Estudios</LinkStyle>
            <LinkStyle href={'/contact'}>Enviame un email</LinkStyle>
        </ContentStyled>
    </NavBar>
}
