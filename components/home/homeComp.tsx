
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import ButtonRepo from "../button/buttonRepo"
import ButtonDeploy from "../button/buttonDeploy"
import Nav from "@components/navbar/navbarComp"
import Footer from "@components/footer/footerComp"
import HeadComp from "@components/head/headComp"
import { DivFather } from "./style"
export default function HomeComponents(): JSX.Element {
    return <DivFather>
        <HeadComp
            title="Ezequiel Sosa"
            ico="eze.ico"
        />
        <Nav />
        <main>
            <section>
                <header>EZEQUIEL SOSA - FULL STACK DEVELOPER</header>
                <article>
                    <p>Bienvenidos a Mi Portfolio</p>
                    <p>Una cosistas de mi</p>
                    <p>
                        Me gusta los desafios y busco diferentes soluciones para cada problema,
                        como el proyecto <a href="#Healthy-Life">Healthy-Life</a> que requirio toda la disiplina y disposicion
                        para poder completarlo en tiempo y forma.
                    </p>
                    <p>
                        Me integro bien en grupo, me gusta poder compartir conocimientos o entre todos podamos
                        solucionar un problema, como en el Proyecto <a href="#Sirun-Pâtisserie">Sirun Pâtisserie </a>
                        donde el proyecto fue realizado por 5 desarrolladores.
                    </p>
                </article>
            </section>
            <section>
                <header id="project">Proyectos</header>
                <div>
                    <section>
                        <header id='Healthy-Life'><h3>Healthy-Life 🍲</h3></header>
                        <Image
                            src='/../public/static/logo-projects/healthy.png'
                            width='100'
                            height='100'
                            alt='Sirun'
                        />
                        <article>
                            <p>Proyecto individual de Soy Henry</p>
                            <p>
                                App de Recetas de comidas clasificada por Dietas.
                            </p>
                            <p>
                                <Link href='/project/healthy_life'>Mas detalles</Link>
                            </p>
                        </article>
                        <div>
                            <ButtonDeploy />
                            <ButtonRepo />
                        </div>
                    </section>
                </div>
                <div>
                    <section>
                        <header id='Sirun-Pâtisserie'><h3>Sirun Pâtisserie 🥐🍪🎂</h3></header>
                        <Image
                            src='/../public/static/logo-projects/sirun-logo.png'
                            width='100'
                            height='100'
                            alt='Sirun'
                        />
                        <article>
                            <p>Proyecto Final de Soy Henry</p>
                            <p>
                                E-commerce orientado a la Pasteleria
                            </p>
                            <p>
                                <Link href='/project/sirun_patisseri'>Mas detalles</Link>
                            </p>
                        </article>
                        <div>
                            <ButtonDeploy />
                            <ButtonRepo />
                        </div>
                    </section>
                </div>
            </section>
        </main>
        <Footer />
    </DivFather>
}