import Image from "next/image"
import Link from "next/link"
import style from './style/style.module.css'
export default function Footer(): JSX.Element {
    return <footer className={style.footer} >
        <Link href="https://twitter.com/EzequielIgnSosa" target='_blank'>
            <Image
                className={style.image}
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
                className={style.image}
                src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/mi1pyplpbcnt8dishtvw.png'
                alt="CV"
                width='100'
                height='100'
            />
        </Link>
        <Link href="https://www.linkedin.com/in/ezequiel-sosa-475150248/" target='_blank'>
            <Image
                className={style.image}
                src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/sq7ueypjvqzegmyrga0l.png'
                alt="Linkedin"
                width='100'
                height='100'
            />
        </Link>
        <Link href="https://wa.me/5492615939075" target='_blank'>
            <Image
                className={style.image}
                src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707790/logo-contact/cmdyxpbwt74yafdxaiaq.webp'
                alt="Whatsapp"
                width='100'
                height='100'
            />
        </Link>
        <Link href="/contact" >
            <Image
                className={style.image}
                src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/logo-contact/ncrvrsmsbravcxrlkr2p.png'
                alt="Gmail"
                width='100'
                height='100'
            />
        </Link>
        <Link href="https://github.com/000EZE000" target='_blank'>
            <Image
                className={style.image}
                src='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707784/logo-contact/p8ax9risj5togq4nz5ml.webp'
                alt="GitHub"
                width='100'
                height='100'
            />
        </Link>

    </footer>
}
