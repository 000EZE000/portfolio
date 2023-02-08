import Image from "next/image"

import { LinkDeploy, LinkRepo, LinkSirun, LinkHealthy, LinkComp } from "@components/button"

import style from './style/style.module.css'
import Nav from "@components/navbar/navbarComp"
import Footer from "@components/footer/footerComp"
import HeadComp from "@components/head/headComp"
export default function HomeComponents(): JSX.Element {
    return <div className={style.div_father}>
        <HeadComp title="Ezequiel Sosa" ico="eze.ico" />
        <Nav />
        <main className={style.main}>
            <section>
                <header className={style.header}>FULL STACK DEVELOPER</header>
                <article className={style.article}>

                    <span className={style.titule_paragraph}> Hola 👋, Me llamo Ezequiel Sosa  y Bienvenidos a Mi Portfolio!!</span>
                    <p></p>
                    <span className={style.paragraph_body}>Unas cositas sobre de mi:</span>

                    <p className={style.paragraph_body}>
                        Me gusta los desafios y busco diferentes soluciones para cada problema,
                        como el proyecto <a href="#Healthy-Life">Healthy-Life</a> que requirio toda la disiplina y disposicion
                        para poder completarlo en tiempo y forma.
                    </p>

                    <span className={style.paragraph_body}>
                        Me integro bien en grupo, me gusta poder compartir conocimientos o entre todos podamos
                        solucionar un problema, como en el Proyecto <a href="#Sirun-Pâtisserie">Sirun Pâtisserie </a>
                        donde el proyecto fue realizado por Mi y  4 desarrolladores mas.
                    </span>

                </article>
            </section>
            <section>
                <header className={style.project}>Proyectos</header>
                <div className={style.container}>
                    <section className={style.seccion_card}>
                        <Image
                            className={style.image}
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670717080/logo-projects/s23j9xdpbug47pcdvirx.png'
                            width='150'
                            height='150'
                            alt='Healthy-Life'
                        />
                        <article className={style.article_paragraph}>

                            <h2 className={style.title_Proyect}>Healthy-Life</h2>

                            <p>Proyecto individual de Soy Henry</p>
                            <p>App de Recetas de comidas</p>
                        </article>
                        <div className={style.container_link}>
                            <LinkHealthy />

                            <LinkComp title="En ello..." link="#" target="" />
                            <LinkComp title="Repositorio" link="https://github.com/000EZE000/Healthy-Life" target=" " />

                        </div>
                    </section>
                    <section className={style.seccion_card}>
                        <Image
                            className={style.image}
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/logo-projects/q3pnvtdl44bq1kiyznjf.png'
                            width='150'
                            height='150'
                            alt='Sirun'
                        />
                        <article className={style.article_paragraph}>

                            <h2 className={style.title_Proyect}>Sirun Pâtisserie</h2>

                            <p>Proyecto Final de Soy Henry</p>
                            <p>E-commerce de Pasteleria</p>
                        </article>
                        <div className={style.container_link}>
                            <LinkSirun />
                            <LinkDeploy />
                            <LinkRepo />
                        </div>
                    </section>
                </div>
            </section>
        </main>
        <Footer />
    </div>
}

