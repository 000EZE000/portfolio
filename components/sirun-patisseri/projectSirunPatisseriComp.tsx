import CollaboratorsComp from "@components/collaborators/collaboratorsComp"
import HeadComp from "@components/head/headComp"
import ButtonDeploy from "../button/LinkDeploy"
import ButtonRepo from "../button/LinkRepo"
import style from './style/style.module.css'
import {useState} from "react"
import Image from "next/image"
import Modal from "@components/modal/modal"
export default function SirunPatisseriComponents(): JSX.Element {
    const [openModal,setOpenModal] = useState(false);
    const [imageUrl,setImageUrl] = useState('');

const userImage =[
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672955938/sirun%20patisserie/bd7qmceclyp4vjvtyj1f.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939659/sirun%20patisserie/u9lql5q9kysasp1wgp3m.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939659/sirun%20patisserie/wwyqkrs9ndt7vxuhhg0k.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939660/sirun%20patisserie/mr94hcuja2kx0ear5rtq.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939660/sirun%20patisserie/vsiretskumpkqxwdrgk8.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939661/sirun%20patisserie/zmaozd19magmatni2qm8.png',
]
const adminImage = [
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939661/sirun%20patisserie/mafp9wk0zarf6bux5s0b.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939661/sirun%20patisserie/xkhjijncuu81nss94lrk.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939659/sirun%20patisserie/g2kks3iab20kfmv1kl4e.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939660/sirun%20patisserie/fzk5guiqzfyhsxysewzl.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939661/sirun%20patisserie/ezelhqt7abxnb6izetbm.png'

]
const appImage = [
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939660/sirun%20patisserie/ivvlwp6z9udfrng6jhfm.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939659/sirun%20patisserie/k5h6hcfuhdsyqxbnm6kt.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939662/sirun%20patisserie/ryoknftakpyeff26b8bx.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939790/sirun%20patisserie/oo5nxxqfldtls5blvjb2.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939789/sirun%20patisserie/jm5ngkv7ly2jmaumefd2.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939789/sirun%20patisserie/yt1r8wxbvgquc1tilss1.png',
    'https://res.cloudinary.com/dqhbskhe7/image/upload/v1672939718/sirun%20patisserie/fkz82qpn5gsf9ug0fkb5.png'
]

    interface prop {
        array: string[]
    }

    function Span({ array }: prop): any {
        return array.map((item, index) => <span className={style.span} key={index}>{item}</span>)
    }
    return <div className={style.div_father} >
        <HeadComp
            title="Sirun Pâtisserie"
            ico="sirun-logo.ico"
        />
        <main>
            <section>
                <header className={style.title}>Sirun Pâtisserie</header>
                <article>
                    <p className={style.paragrahp_title}>
                        El proyecto Final de Henry, un Ecommerce ,realizado por 5 persona, lo bueno de Este Equipo es que no nos conformamos con los requisitos
                        minimos que se nos pedia , fuimos por mas, y esta ves podiamos usar cualquier tecnologia.
                    </p>
                </article>
                <p className={style.father_title_technologies}>
                    Tecnologias Usadas
                </p>
                <article>
                    <p className={style.title_technologies} >Front end</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Typescript', 'CSS', 'HTML', 'React', 'Redux(persist, tookit)', 'Nextjs']}
                        />
                    </div>
                    <p className={style.title_technologies} >Back end</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Typescript', 'Nodejs', 'Nodemailer',]}
                        />
                    </div>
                    <p className={style.title_technologies} >Base de Dato</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Typescript', 'Prisma', 'Postgres']}
                        />
                    </div>

                    <p className={style.title_technologies} >Control de Versiones</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Git', 'GitHub', 'GitFlow']}
                        />
                    </div>
                    <p className={style.title_technologies} >APIS</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Auth0', 'Next-auth', 'Cloudinary', 'Mercado Pago']}
                        />
                    </div>
                    <p className={style.title_technologies} >Deploy</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Base de Datos: AWS Amazon', 'Client & Server: Vercel']}
                        />
                    </div>
                    <p className={style.title_technologies} >Organizacion</p>
                    <div className={style.content_span}>
                        <Span
                            array={['Trello', 'Mucho Pair Programing']}
                        />
                    </div>
                </article>
                <article className={style.content_span_request}>
                    <p className={style.father_title_technologies}>Requerimentos</p>
                    {[
                        '✅ Login: autenticacion por Aut0.',
                        '✅ Personalizacion: el Usuario logueado puede cambiarse la foto, nombre, dirrecciones y contraseña.',
                        '✅ Ordenes: Una vez efectado el Pago se envia un Email con toda informacion de la order.',
                        '✅ Administracion:Solo para usarios Admin y para el Usuario SuperAdmin.',
                        '✅ Interactividad: dar Review , Rating y poner a favoritos a los Productos, (solo si esta logueado).',
                        '✅ Pasarela de Pago: Carrito de Compra y se puede comprar atra vez de Mercado pago.',
                        '✅ Ordenes: Una vez efectado el Pago se envia un Email con toda informacion de la order.',
                        '✅ Admin-User: administracion de Usuarios. El SuperAdmin puede cambiar roles.',
                        '✅ Admin-Ordenes: administracion de Ordenes y envios de correos cuando el Producto se dispache.',
                        '✅ Admin-Graficos:Porcentaje de ventas , de review , Rating.',
                        '✅ Proteccion de Rutas.',
                        '✅ Tiempo de ejecucion: 3 semanas'
                    ].map((item, index) => <span className={style.span_request} key={index} >{item}</span>)}
                </article>
            </section>
            <section>
                <header className={style.father_title_technologies}>Integrantes</header>
                <CollaboratorsComp />
            </section>
            <section>
                <header><h3>Fotos</h3></header>
                <p>Parte Usuario</p>
                <div className={style.container_image}>
                    {userImage.map((image, index) =>
                        <Image
                            key={index}
                            src={image}
                            height='2000'
                            width='2000'
                            alt='image'
                            className={style.image}
                            onClick={() => {
                                setImageUrl(image)
                                setOpenModal(!openModal)
                            }}
                        />
                    )}
                </div>
                <p>Parte Admin</p>
                <div className={style.container_image}>
                    {adminImage.map((image, index) =>
                        <Image
                            key={index}
                            src={image}
                            height='2000'
                            width='2000'
                            alt='image'
                            className={style.image}
                            onClick={() => {
                                setImageUrl(image)
                                setOpenModal(!openModal)
                            }}
                        />
                    )}
                </div>
                <p>App</p>
         <div className={style.container_image}>
                    {appImage.map((image, index) =>
                        <Image
                            key={index}
                            src={image}
                            height='2000'
                            width='2000'
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
                <header><h3>Deploy y Repo</h3></header>
                <ButtonDeploy />
                <ButtonRepo />
            </section>
        </main>
<Modal
openModal={setOpenModal}
image={imageUrl}
switchModal={openModal}
/>
    </div>
}