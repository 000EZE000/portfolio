import HeadComp from '@components/head/headComp'
import Image from 'next/image'
import Nav from '@components/navbar/navbarComp'
import Footer from '@components/footer/footerComp'
import { useState } from 'react'
import Modal from '@components/modal/modal'
import style from './style/style.module.css'
export default function StudiesComp(): JSX.Element {
    interface Iswitch { certificate: boolean, mentions: boolean }
    const mySwitch: Iswitch = { certificate: false, mentions: false }
    const [switchModal, setSwitchModal] = useState(mySwitch)
    const openModalCertificate = () => setSwitchModal({ ...switchModal, certificate: !switchModal.certificate })
    const openModalMentions = () => setSwitchModal({ ...switchModal, mentions: !switchModal.mentions })
    return <div className={style.div_father}>
        <HeadComp
            title='Estudios'
            ico="eze.ico"
        />
        <Nav />
        <main>
            <section>
                <header>
                    <h2 className={style.title}>Bootcamp</h2>
                    <div className={style.container_image}>
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1671060647/logo-studies/rs7lpjzvaohjxu0xq3ja.png'
                            width='800'
                            height='200'
                            alt='Henry'
                            className={style.image_henry}
                        />
                    </div>
                </header>
                <h2 className={style.titule_tecnologie}>Tecnologias Aprendidas</h2>
                <article className={style.container_span}>
                    {["CSS", "HTML", "Javascript", "React", "Redux", "Git",
                        "Express", "Sequilize", "Postgres", "NodeJs"
                    ].map(tecno => <span className={style.span}>{tecno}</span>)
                    }
                </article>
                <hr />
                <h2 className={style.titule_tecnologie}>Habilidades Blandas</h2>
                <article className={style.container_span}>
                    {["Pair Programing", "Code Review", "Presentacion de Proyecto (Helthy)",
                        "Trabajo grupal (Sirun)"
                    ].map(tecno => <span className={style.span}>{tecno}</span>)
                    }
                </article>
                <article className={style.container_button}>
                    <button onClick={openModalCertificate} className={style.button}>Certificado de Graduacion</button>
                    <button onClick={openModalMentions} className={style.button}>Menciones Honorificas</button>

                </article>
            </section>
            <hr />
            <section>
                <header>
                    <h2 className={style.title_autodidact}>Autodidacta</h2>
                    <div className={style.container_image}>
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/logo-studies/rndnz2gfl86ctasxxowf.jpg'
                            width='1000'
                            height='400'
                            alt='autodidacta'
                            className={style.image_autodidact}
                        />
                    </div>
                </header>


                <article className={style.container_span}>
                    {["Next js", "Prisma (ORM)", "Redux Toolkit-Persit",
                        "Typescript", "NextAuth", "Auth0", "Cloudinary", "Nodemailer", "Api Mercado Pago"
                    ].map(tecno => <span className={style.span_autodidact}>{tecno}</span>)
                    }
                </article>
            </section>
        </main>
        <Modal
            openModal={openModalCertificate}
            switchModal={switchModal.certificate}
            image={'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707785/certificate/cjigyelajoflmecwmtdk.png'}
        />
        <Modal
            openModal={openModalMentions}
            switchModal={switchModal.mentions}
            image={'https://res.cloudinary.com/dqhbskhe7/image/upload/v1671145858/certificate/azrvqdnx6amgmbsjg9lq.png'}
        />
        <Footer />
    </div>

}
