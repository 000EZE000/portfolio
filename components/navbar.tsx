import Head from 'next/head'
import Link from 'next/link'


export default function Nav(): JSX.Element {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Inicio</Link>
                </li>
                <li>
                    <Link href={'/about'}>Sobre Mi</Link>
                </li>
                <li>
                    <Link href={'/'}>Habilidades</Link>
                </li>
                <li>
                    <Link href={'/'}>Proyectos</Link>
                </li>
                <li>
                    <Link href={'/'}>Estudios</Link>
                </li>
                <li>
                    <Link href={'/'}>Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}
