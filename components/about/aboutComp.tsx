
import Image from "next/image"
import HeadComp from "@components/head/headComp"
import Footer from "@components/footer/footerComp"
import Nav from "@components/navbar/navbarComp"
import style from './style/style.module.css'
export default function AboutComponents(): JSX.Element {

    const dateNow = new Date().toJSON().split('-')[0]
    const myAge = Number(dateNow) - 1997

    return <div className={style.div_father}>
        <HeadComp
            title="Sobre Mi"
            ico="eze.ico"
        />
        <Nav />
        <main className={style.main} >
            <section>
                <div className={style.container_image_header}>
                    <header className={style.header}><h1>Hola 👋, Soy Ezequiel Sosa </h1></header>
                    <Image
                        src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670805522/photo/kb6sinhetkgzqn8s8i9a.png'
                        alt="Ezequiel Sosa"
                        width='300'
                        height='300'
                        className={style.image}
                    />

                </div>
                <article className={style.article}>
                    <p>Si tuviera que describirme en una palabra, esa seria perseverancia.</p>
                    <p>
                        Antes de adentrarme el mundo tecnológico, yo me dedicaba (para resumir) a Construir edificios (Planos y dirección de Obras ).
                    </p>
                    <p>
                        El rubro Profesional era excelente, alcance el cargo <i><b>Maestro Mayor de Obra</b></i> y todo en el trascurso de 6 años, aun con todo el logro, no disfrutaba trabajar de eso.
                    </p>
                    <p>
                        Hasta que llego el año 2022 y decidí reinventarme, Metiéndome de lleno a esta hermosa profesión.
                    </p>
                    <p>
                        Ahora bien, el camino no fue ni es fácil, pero disfruto todo lo que con lleva el desarrollo y la programación como tal.
                    </p>
                    <p>
                        El desarrollo Web es el área que de trabajo donde me siento cómodo y Feliz!!.
                    </p>
                </article>
            </section>
        </main>
        <Footer />
    </div>
}