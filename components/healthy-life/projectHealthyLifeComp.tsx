import HeadComp from "@components/head/headComp"
import ButtonRepo from "../button/LinkRepo"
import Footer from "@components/footer/footerComp"
import Nav from "@components/navbar/navbarComp"
import { LinkComp } from "@components/button"
import style from "./style/style.module.css"
import Image from "next/image"
import Modal from "@components/modal/modal"
import { useState } from "react"
export default function HealthyLifeComponentes(): JSX.Element {
    const [openModal, setOpenModal] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const itemImageUrl = [
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667874/healthy-life/vdislarsed2izkcovnuk.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667874/healthy-life/k9efxaixnwzrmocauql6.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667873/healthy-life/uqucv8wbsidrpsxggij4.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667872/healthy-life/nf2axjin86rdwewnqedw.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667872/healthy-life/aw5evc3zndlspolvkh0x.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667871/healthy-life/hdqcbwga0i5ggf66yo0x.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667871/healthy-life/c4bg0b3cbg9fbcurn4md.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667871/healthy-life/apytcig9sttegcejjqiw.png',
        'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672667871/healthy-life/wl0rbd7y1xkgzjbi0oo7.png'
    ]

    interface prop {
        array: string[]
    }
    const Span = ({ array }: prop): any => (
        array.map((e, index) => <span
            key={index}
            className={style.span}
        >{e}
        </span>
        )
    )

    return <div className={style.div_father} >
        <HeadComp
            title="Healthy Life"
            ico="healthy.ico"
        />

        <Nav/>
        <main className={style.main}>
            <section>
                <header className={style.title}>Healthy Life</header>

                <article>
                    <p className={style.paragraph_content}>
                        El proyecto consistia en hacer una Aplicacion Full Stack ,
                        Front-end - Back-end - Base de datos y solo podiamos usar las tecnologias
                        enseñadas por el bootcamp Henry.
                    </p>
                </article>
                <div>
                    <p className={style.father_title_technologies}>
                        Tecnologias Usadas
                    </p>
                </div>

                <article className={style.content_technologie}>
                    <div className={style.container_technologie}>
                        <p className={style.title_technologies}>Front-End</p>
                        <div className={style.content_span}>
                            <Span array={['Javascript', 'CSS', 'HTML', 'React', 'Redux']} />
                        </div>
                    </div>
                    <div className={style.container_technologie}>
                        <p className={style.title_technologies}>Back-End</p>
                        <div className={style.content_span}>
                            <Span array={['Javascript', 'Express', 'Node js']} />
                        </div>
                    </div>
                    <div className={style.container_technologie}>
                        <p className={style.title_technologies}>Bases de Datos</p>
                        <div className={style.content_span}>
                            <Span array={['Sequileze', 'Postgres']} />
                        </div>
                    </div>
                    <div className={style.container_technologie}>
                        <p className={style.title_technologies}>Control de Versiones</p>
                        <div className={style.content_span}>
                            <Span array={['Git', 'GitHub']} />
                        </div>
                    </div>
                </article>
                <article className={style.content_span_request}>
                    <p className={style.father_title_technologies}>Requerimentos</p>

                    {
                        [
                            '✅ Home: donde explica cada seccion de la Aplicacion.',
                            '✅ Navbar: donde podemos navegar a cada seccion.',
                            '✅ Recetas: donde mostrara una Lista de Recetas donde se puede buscar y Filtrar.',
                            '✅ Detalle: donde mostrara el detalle Receta.',
                            '✅ Creacion: se puede crear tanto recetas como dietas y podemos vincular entre si.',
                            '✅ ⌛ Tiempo de Ejecucion: 3 semanas',
                        ].map((item, index) => <span key={index} className={style.span_request} >{item}</span>)
                    }

                </article>
            </section>
            <section >
                <header className={style.father_title_technologies}><h3>Fotos</h3></header>
                <div className={style.container_image}>
                    {itemImageUrl.map((image, index) =>
                        <Image
                            key={index}
                            src={image}
                            height='1000'
                            width='1000'
                            alt='image'
                            className={style.image}
                            onClick={() => {
                                setImageUrl(image)
                                setOpenModal(!openModal)
                            }}
                        />
                    )}
                </div>
            </section>
            <section>
                <div className={style.container_button_deploy_repo}>

                    <LinkComp title="En Ello" link="" target="" />

                    <ButtonRepo />
                </div>
            </section>
        </main>
        <Modal
            openModal={setOpenModal}
            switchModal={openModal}
            image={imageUrl}
        />

        <Footer/>

    </div>
}