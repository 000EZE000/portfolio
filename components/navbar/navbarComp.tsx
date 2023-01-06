import style from './style/style.module.css'
import Link from 'next/link'
import { useState } from 'react'
export default function Nav(): JSX.Element {
    const [switchNav, setSwitchNav] = useState(false)
    return <nav className={style.nav}>
        <div className={style.container}>
            <Link className={style.link} href={'/'}>Inicio</Link>
            <Link className={style.link} href={'/about'}>Sobre Mi</Link>
            <Link className={style.link} href={'/skills'}>Habilidades</Link>
            <Link className={style.link} href={'/studies'}>Estudios</Link>
            <Link className={style.link} href={'/contact'}>Enviame un email</Link>
        </div>
        <div className={style.nav_response_close}>
            <button
                className={style.button_response}
                onClick={() => {
                    setSwitchNav(!switchNav)

                }}>{switchNav ? "ⅹ" : "≡"}</button>
        </div>
        {switchNav && <div>
            <div className={style.nav_response_open}>
                <Link className={style.link} href={'/'}>Inicio</Link>
                <Link className={style.link} href={'/about'}>Sobre Mi</Link>
                <Link className={style.link} href={'/skills'}>Habilidades</Link>
                <Link className={style.link} href={'/studies'}>Estudios</Link>
                <Link className={style.link} href={'/contact'}>Enviame un email</Link>
            </div>

        </div>
        }
    </nav>
}
