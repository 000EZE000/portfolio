
import Image from "next/image"
import HeadComp from "@components/head/headComp"
import Footer from "@components/footer/footerComp"
import Nav from "@components/navbar/navbarComp"
export default function AboutComponents(): JSX.Element {

    const dateNow = new Date().toJSON().split('-')[0]
    const myAge = Number(dateNow) - 1997

    return <div>
        <HeadComp
            title="Sobre Mi"
            ico="eze.ico"
        />
        <Nav />
        <main>
            <section>
                <title>Mi camino a Desarrollador Web</title>
                <article>
                    <Image
                        src='/../public/photo/me.png'
                        alt="Ezequiel Sosa"
                        width='100'
                        height='100'
                    />
                    <p>
                        Hola me llamo Ezequiel Sosa  y tengo {myAge} años,
                        en el año 2022 deje mi trabajo que era Maestro de Obra,
                        aunque era un buen trabajo y  ya habia escalado lo suficiente
                        para hacer lider de Grupo.
                    </p>
                    <p>
                        Tome la dura decision de cambiar el rumbo y llegue a la conclucion
                        de que el trabajo que me especialize y Yo no eramos complatibles.
                    </p>
                    <p>
                        Era mi oportunidad para ver lo que me gustaba y aunque el area de tecnologia ofrece muchas
                        opciones, El desarrolo Web era lo mio.
                    </p>
                    <p>
                        Ahi conoci Henry un bootcamp donde desarrolle tanto hablidades duras,
                        como blandas, empezando el 1 de agosto del 2022 hasta su finalizandolo el
                        09 de diciembre del mismo año, con mas de 1000 hs de practica.
                    </p>
                    <p>
                        Soy una persona que le gusta tomar la inicitiva, que planea bien las cosas antes
                        de comenzarlas y que busca la solucion mas optima, y si es necesario ser el lider.
                    </p>
                    <p>
                        Trabajar en equipo es una de las experencias mas linda del bootcamp compartir
                        codigo con personas que tiran para el mismo lado es algo increible.
                    </p>
                </article>
            </section>
        </main>
        <Footer />
    </div>
}