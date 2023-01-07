import HeadComp from '@components/head/headComp'
import Image from 'next/image'
import Nav from '@components/navbar/navbarComp'
import { useState } from 'react'
import { FormEvent } from 'react'
import { status, Ierror } from './models'
import SendFormServer from './services/sendeEmail'
import Link from 'next/link'
import style from './style/style.module.css'
import { Email, Body } from './validate'
import { Switch } from 'antd'
export default function ContactComp(): JSX.Element {

    const initialStatus: status = {
        email: '',
        body: '',
        confirm: false,
        feedBack: '',
        statusFeedBack: false
    }

    const initialError: Ierror = {
        email: '',
        body: '',
        feedBack: 'fail',
    }
    const [infEmail, setInfEmail] = useState(initialStatus)
    const [errorStatus, setErrorStatus] = useState(initialError)
    const [modal, setModal] = useState(false)
    const validateContent = Boolean(infEmail.body && infEmail.email)
    const validateErorr = Boolean(!errorStatus.email && !errorStatus.body)
    const validateFeedBack = Boolean(!errorStatus.feedBack)
    const handleOnClick = () => {
        setInfEmail({ ...infEmail, confirm: !infEmail.confirm })
    }
    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await SendFormServer(infEmail)
        setInfEmail(initialStatus)
        setModal(!modal)
    }
    const srt = {
        width: '3rem',
        display: 'flex',
        margin: '2rem',
        padding: '0.7rem',
        border: '2px solid white',
        transform: 'scale(2)'
    }

    console.log(infEmail);

    return <div className={style.div_father}>
        <HeadComp
            title='Contacto'
            ico='gmail.ico'
        />
        <Nav />
        <main>
            <section>
                <header>
                    <h1 className={style.title}>Contacto</h1>
                </header>
                <article>
                    <form className={style.container} onSubmit={handleOnSubmit}>
                        <Email
                            error={{ dataError: errorStatus, setError: setErrorStatus }}
                            statusI={{ data: infEmail, setData: setInfEmail }}
                        />
                        <Body
                            name='body'
                            error={{ setData: setErrorStatus, data: errorStatus }}
                            status={{ setData: setInfEmail, data: infEmail }}
                        />
                        <div className={style.container_checkbox}>
                            <Switch style={srt} onClick={handleOnClick} checked={infEmail.confirm} />
                            <span className={style.span_checkbox}>Email de confirmacion</span>
                        </div>
                        <div className={infEmail.statusFeedBack ? style.container_feedback : style.container_false_feedback}>
                            <input
                                type="button"
                                className={infEmail.statusFeedBack ? style.switch_feedback_close : style.switch_feedback_open}
                                value={`${infEmail.statusFeedBack ? '❌' : "Dar FeedBack 💜"}`}
                                onClick={() => {
                                    setInfEmail({
                                        ...infEmail, feedBack: '',
                                        statusFeedBack: !infEmail.statusFeedBack
                                    })

                                }} />
                            {infEmail.statusFeedBack && <div>
                                <Body
                                    name='feedBack'
                                    error={{ setData: setErrorStatus, data: errorStatus }}
                                    status={{ setData: setInfEmail, data: infEmail }}
                                />
                            </div>

                            }
                        </div>
                        {infEmail.statusFeedBack ?
                            <div className={style.container_submit}>
                                <input
                                    disabled={!(validateContent && validateErorr && validateFeedBack)}
                                    type="submit"
                                    value="Enviar!!"
                                    className={style.submit}
                                />
                            </div>
                            :
                            <div className={style.container_submit}>
                                <input
                                    disabled={!(validateContent && validateErorr)}
                                    type="submit"
                                    value="Enviar"
                                    className={style.submit}
                                />
                            </div>
                        }
                    </form>
                </article>

            </section>
            <hr />
            <section>
                <header>
                    <h1 className={style.title_contact}>
                        Otras forma de Contactarme
                    </h1>
                </header>
                <article className={style.container_contact}>
                    <Link
                        href="https://wa.me/5492615939075"
                        target='_blank'
                        className={style.contact_card}
                    >
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707790/logo-contact/cmdyxpbwt74yafdxaiaq.webp'
                            alt="Whatsapp"
                            width='200'
                            height='200'
                            className={style.contact_imageloc}
                        />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ezequiel-sosa-475150248/"
                        target='_blank'
                        className={style.contact_card}
                    >
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/sq7ueypjvqzegmyrga0l.png'
                            alt="Linkedin"
                            width='200'
                            height='200'
                              className={style.contact_imageloc}
                        />
                    </Link>
                    <Link
                        href="https://github.com/000EZE000"
                        target='_blank'
                        className={style.contact_card}
                    >
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707784/logo-contact/p8ax9risj5togq4nz5ml.webp'
                            alt="GitHub"
                            width='200'
                            height='200'
                              className={style.contact_imageloc}
                        />
                    </Link>
                    <Link
                        href="https://twitter.com/EzequielIgnSosa"
                        target='_blank'
                        className={style.contact_card}
                    >
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/c2gy7bl5wsbhomdxd1pg.png'
                            alt="Twitter"
                            width='200'
                            height='200'
                              className={style.contact_imageloc}
                        />
                    </Link>
                    <Link
                        href="https://drive.google.com/u/0/uc?id=199TAB95n-AKumZiXN2Tzw8oY_9qz427O&export=download"
                        className={style.contact_card}
                    >
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/mi1pyplpbcnt8dishtvw.png'
                            alt="CV"
                            width='200'
                            height='200'
                              className={style.contact_imageloc}
                        />
                    </Link>
                </article>
            </section>
        </main>
        {modal && <div className={style.container_modal}>
            <div className={style.container_child_modal}>
                <div className={style.container_title_input_modal}>
                    <span className={style.title_modal} >Email enviado</span>
                    <input
                        type="button"
                        value="❌"
                        onClick={() => { setModal(!modal) }}
                        className={style.modal_close_input}
                    />
                </div>
                <Image
                    src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1671592861/logo-check/pc0ldenmgvme72zmwlnh.png'
                    alt='check'
                    width='200'
                    height='200'
                />
            </div>
        </div>}

    </div>
}