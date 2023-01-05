import CollaboratorsComp from "@components/collaborators/collaboratorsComp"
import HeadComp from "@components/head/headComp"
import ButtonDeploy from "../button/LinkDeploy"
import ButtonRepo from "../button/LinkRepo"
import style from './style/style.module.css'
export default function SirunPatisseriComponents(): JSX.Element {
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

            </section>
            <section>
                <header><h3>Deploy y Repo</h3></header>
                <ButtonDeploy />
                <ButtonRepo />
            </section>
        </main>

    </div>
}