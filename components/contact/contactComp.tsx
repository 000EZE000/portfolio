import HeadComp from '@components/head/headComp'
import Image from 'next/image'
import Nav from '@components/navbar/navbarComp'
import { ChangeEvent, useState } from 'react'
import { FormEvent } from 'react'
import { status } from './models'
import SendFormServer from './services/sendeEmail'
import Link from 'next/link'
export default function ContactComp(): JSX.Element {

    const initialStatus: status = {
        email: '',
        body: '',
        confirm: false,
        feedBack: '',
        statusFeedBack: false
    }
    const [infEmail, setInfEmail] = useState(initialStatus)

    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = target
        setInfEmail({ ...infEmail, [name]: value })
    }

    const handleOnClick = () => {
        setInfEmail({ ...infEmail, confirm: !infEmail.confirm })
    }
    const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await SendFormServer(infEmail)

    }
    return <div>
        <HeadComp
            title='Contacto'
            ico='gmail.ico'
        />
        <Nav />
        <main>
            <section>
                <header>
                    <p>{JSON.stringify(infEmail)}</p>
                    <h1>Contacto</h1>
                </header>
                <article>
                    <form onSubmit={handleOnSubmit}>
                        <label htmlFor="name">Tu Email</label>
                        <input
                            type="text"
                            name='email'
                            value={infEmail.email}
                            onChange={handleOnChange}
                        // placeholder=' holaMundo@gmail.com'
                        />
                        <label htmlFor="body">Contenido</label>
                        <textarea name='body' value={infEmail.body} onChange={handleOnChange} />
                        <label htmlFor="confirm">Quieres un Email de Confirmacion?</label>
                        <input type="radio" name="confirm" checked={infEmail.confirm} onClick={handleOnClick} />
                        {infEmail.statusFeedBack ?
                            <>
                                <label htmlFor="feedBack">Mi Feedback</label>
                                <textarea name="feedBack" value={infEmail.feedBack} onChange={handleOnChange}></textarea>
                            </>
                            :
                            <>
                                <p>Te gustaria dejar un FeedBack del Portfio?</p>
                                <input type="button" value={'Si quiero!!'} onClick={() => setInfEmail({ ...infEmail, statusFeedBack: !infEmail.statusFeedBack })} />
                            </>}
                        <input type="submit" value="Enviar!!" />
                    </form>
                </article>

            </section>
            <section>
                <header><h1>Otras forma de Contactarme</h1></header>
                <article>
                    <Link href="https://wa.me/5492615939075" target='_blank'>
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707790/logo-contact/cmdyxpbwt74yafdxaiaq.webp'
                            alt="Whatsapp"
                            width='100'
                            height='100'
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ezequiel-sosa-475150248/" target='_blank'>
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/sq7ueypjvqzegmyrga0l.png'
                            alt="Linkedin"
                            width='100'
                            height='100'
                        />
                    </Link>
                    <Link href="https://github.com/000EZE000" target='_blank'>
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707784/logo-contact/p8ax9risj5togq4nz5ml.webp'
                            alt="GitHub"
                            width='100'
                            height='100'
                        />
                    </Link>
                    <Link href="https://twitter.com/EzequielIgnSosa" target='_blank'>
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/c2gy7bl5wsbhomdxd1pg.png'
                            alt="Twitter"
                            width='100'
                            height='100'
                        />
                    </Link>
                    <Link
                        href="https://drive.google.com/u/0/uc?id=199TAB95n-AKumZiXN2Tzw8oY_9qz427O&export=download"
                    >
                        <Image
                            src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/mi1pyplpbcnt8dishtvw.png'
                            alt="CV"
                            width='100'
                            height='100'
                        />
                    </Link>
                </article>
            </section>
        </main>

    </div>
}