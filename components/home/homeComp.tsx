
import Link from "next/link"
import Image from "next/image"
import { LinkDeploy, LinkRepo, LinkSirun, LinkHealthy } from "@components/button"
import Nav from "@components/navbar/navbarComp"
import Footer from "@components/footer/footerComp"
import HeadComp from "@components/head/headComp"
import {
    DivFather,
    SeccionStyled,
    Headerstyled,
    MainStyled,
    ArticleStyled,
    PTitule,
    PBody,
    HeaderProyect,
    ContainerStyle,
    SeccionCard,
    ContainerLink,
    ArticlePStyle,
    StyledImage
} from "./style"
export default function HomeComponents(): JSX.Element {
    return <DivFather>
        <HeadComp
            title="Ezequiel Sosa"
            ico="eze.ico"
        />
        <Nav />
        <MainStyled>

            <SeccionStyled>
                <Headerstyled>FULL STACK DEVELOPER</Headerstyled>
                <ArticleStyled>
                    <PTitule>Bienvenidos a Mi Portfolio</PTitule>
                    <PBody>Unas cositas sobre de mi:</PBody>
                    <PBody>
                        Me gusta los desafios y busco diferentes soluciones para cada problema,
                        como el proyecto <a href="#Healthy-Life">Healthy-Life</a> que requirio toda la disiplina y disposicion
                        para poder completarlo en tiempo y forma.
                    </PBody>
                    <PBody>
                        Me integro bien en grupo, me gusta poder compartir conocimientos o entre todos podamos
                        solucionar un problema, como en el Proyecto <a href="#Sirun-Pâtisserie">Sirun Pâtisserie </a>
                        donde el proyecto fue realizado por Mi y  4 desarrolladores mas.
                    </PBody>
                </ArticleStyled>
            </SeccionStyled>
            <section>
                <HeaderProyect>Proyectos</HeaderProyect>
                <ContainerStyle>
                    <SeccionCard>
                        <StyledImage
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670717080/logo-projects/s23j9xdpbug47pcdvirx.png'
                            width='150'
                            height='150'
                            alt='Healthy-Life'
                        />
                        <ArticlePStyle>
                            <h2>Healthy-Life</h2>
                            <p>Proyecto individual de Soy Henry</p>
                            <p>App de Recetas de comidas</p>
                        </ArticlePStyle>
                        <ContainerLink>
                            <LinkHealthy />
                            <LinkDeploy />
                            <LinkRepo />
                        </ContainerLink>
                    </SeccionCard>
                    <SeccionCard>
                        <StyledImage
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/logo-projects/q3pnvtdl44bq1kiyznjf.png'
                            width='150'
                            height='150'
                            alt='Sirun'
                        />
                        <ArticlePStyle>
                            <h2>Sirun Pâtisserie</h2>
                            <p>Proyecto Final de Soy Henry</p>
                            <p>E-commerce de Pasteleria</p>
                        </ArticlePStyle>
                        <ContainerLink>
                            <LinkSirun />
                            <LinkDeploy />
                            <LinkRepo />
                        </ContainerLink>
                    </SeccionCard>
                </ContainerStyle>
            </section>
        </MainStyled>
        <Footer />
    </DivFather>
}

