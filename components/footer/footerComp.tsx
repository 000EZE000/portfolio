import Image from "next/image"
import Link from "next/link"
export default function Footer(): JSX.Element {
    return <div>
        <footer>
            <Link href="https://wa.me/5492615939075" target='_blank'>
                <Image
                    src='/../public/static/logo-contact/whatsApp.webp'
                    alt="Whatsapp"
                    width='100'
                    height='100'
                />
            </Link>
            <Link href="/contact" >
                <Image
                    src='/../public/static/logo-contact/gmail.png'
                    alt="Gmail"
                    width='100'
                    height='100'
                />
            </Link>
            <Link href="https://www.linkedin.com/in/ezequiel-sosa-475150248/" target='_blank'>
                <Image
                    src='/../public/static/logo-contact/linkedin.png'
                    alt="Linkedin"
                    width='100'
                    height='100'
                />
            </Link>
            <Link href="https://github.com/000EZE000" target='_blank'>
                <Image
                    src='/../public/static/logo-contact/gitHub.webp'
                    alt="GitHub"
                    width='100'
                    height='100'
                />
            </Link>
            <Link href="https://twitter.com/EzequielIgnSosa" target='_blank'>
                <Image
                    src='/../public/static/logo-contact/twitter.png'
                    alt="Twitter"
                    width='100'
                    height='100'
                />
            </Link>
            <Link
                href="https://drive.google.com/u/0/uc?id=199TAB95n-AKumZiXN2Tzw8oY_9qz427O&export=download"
            >
                <Image
                    src='/../public/static/logo-contact/cV.png'
                    alt="CV"
                    width='100'
                    height='100'
                />
            </Link>
        </footer>
    </div>
}
