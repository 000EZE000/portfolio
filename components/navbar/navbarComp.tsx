import style from './style/style.module.css'
import Link from 'next/link'
export default function Nav(): JSX.Element {
    return <nav className={style.nav}>
        <div className={style.container}>
            <Link className={style.link} href={'/'}>Inicio</Link>
            <Link className={style.link} href={'/about'}>Sobre Mi</Link>
            <Link className={style.link} href={'/skills'}>Habilidades</Link>
            <Link className={style.link} href={'/studies'}>Estudios</Link>
            <Link className={style.link} href={'/contact'}>Enviame un email</Link>
        </div>
    </nav>
}
