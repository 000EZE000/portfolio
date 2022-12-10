import CollaboratorsComp from "@components/collaborators/collaboratorsComp"
import HeadComp from "@components/head/headComp"
import ButtonDeploy from "../button/buttonDeploy"
import ButtonRepo from "../button/buttonRepo"
export default function SirunPatisseriComponents(): JSX.Element {
    return <div>
        <HeadComp
            title="Sirun Pâtisserie"
            ico="sirun-logo.ico"
        />
        <main>
            <section>
                <header><h1>Sirun Pâtisserie</h1></header>
                <article>
                    <p>
                        El proyecto Final de Henry, el proyecto era Ambicioso, y para poder
                        hacerlo requeria de en equipo, fuimos 5 persona que encararon este
                        proyecto, lo bueno de Este Equipo es que no nos conformamos con los requisitos
                        minimos que se nos pedia, fuimos por mas, y esta ves podiamos usar cualquier tecnologia.
                    </p>
                    <p>
                        Tecnologias Usadas
                    </p>
                    <article>
                        <ul>
                            <p>Front end</p>
                            <li>
                                Typescript
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                React
                            </li>
                            <li>
                                Redux(persist, tookit)
                            </li>
                            <li>
                                Nextjs
                            </li>
                        </ul>
                        <ul>
                            <p>Back end</p>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Nextjs(Express)
                            </li>
                            <li>
                                Node js
                            </li>
                            <li>
                                Nodemailer
                            </li>
                        </ul>
                        <ul>
                            <p>Bases de Datos</p>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Prisma
                            </li>
                            <li>
                                Postgres
                            </li>
                        </ul>
                        <ul>
                            <p>Control de Versiones</p>
                            <li>
                                Git
                            </li>
                            <li>
                                GitHub
                            </li>
                            <li>
                                GitFlow
                            </li>
                        </ul>
                        <ul>
                            <p>APIS</p>
                            <li>
                                Auth0
                            </li>
                            <li>
                                Next-auth
                            </li>
                            <li>
                                Cloudinary
                            </li>
                            <li>
                                Mercado Pago
                            </li>
                        </ul>
                        <ul>
                            <p>Deploy</p>
                            <li>
                                Base de Datos: AWS Amazon
                            </li>
                            <li>
                                Client & Server: Vercel
                            </li>
                        </ul>
                        <ul>
                            <p>Organizacion</p>
                            <li>
                                Trello
                            </li>
                            <li>
                                Mucho Pair Programing
                            </li>
                        </ul>
                    </article>

                </article>
                <article>
                    <p>Tiempo de ejecucion: 3 semanas</p>
                    <p>
                        Requerimentos:
                    </p>
                    <ul>
                        <li>
                            ✅Login: autenticacion por Aut0.
                        </li>
                        <li>
                            ✅Personalizacion: el Usuario logueado puede cambiarse la foto, nombre, dirrecciones y contraseña.
                        </li>
                        <li>
                            ✅Ordenes: Una vez efectado el Pago se envia un Email con toda informacion de la order.
                        </li>
                        <li>
                            ✅Administracion:Solo para usarios Admin y para el Usuario SuperAdmin .
                        </li>
                        <li>
                            ✅Interactividad: dar Review , Rating y poner a favoritos a los Productos, (solo si esta logueado).
                        </li>
                        <li>
                            ✅Pasarela de Pago: Carrito de Compra y se puede comprar atra vez de Mercado pago.
                        </li>
                        <li>
                            ✅Ordenes: Una vez efectado el Pago se envia un Email con toda informacion de la order.
                        </li>
                        <li>
                            ✅Admin-User: administracion de Usuarios. El SuperAdmin puede cambiar roles.
                        </li>
                        <li>
                            ✅Admin-Ordenes: administracion de Ordenes y envios de correos cuando el Producto se dispache.
                        </li>
                        <li>
                            ✅Admin-Graficos:Porcentaje de ventas , de review , Rating.
                        </li>
                        <li>
                            ✅Proteccion de Rutas.
                        </li>
                    </ul>

                </article>
            </section>
            <section>
                <header><h3>Integrantes</h3></header>
                <CollaboratorsComp />
            </section>
            <section>
                <header><h3>Fotos</h3></header>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </section>
            <section>
                <header><h3>Video</h3></header>
                <video src=""></video>
            </section>
            <section>
                <header><h3>Deploy y Repo</h3></header>
                <ButtonDeploy />
                <ButtonRepo />
            </section>
        </main>

    </div>
}