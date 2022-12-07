import Footer from "@components/footer"
import Nav from "@components/navbar"
export default function SirunPatisseri(): JSX.Element {
    return (
        <div>
            <Nav />
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
                                    Base de Datos AWS Amazon
                                </li>
                                <li>
                                    CLient & Server Vercel
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
                                ✅Home: donde explica cada seccion de la Aplicacion.
                            </li>
                            <li>
                                ✅Navbar: donde podemos navegar a cada seccion.
                            </li>
                            <li>
                                ✅Recetas: donde mostrara una Lista de Recetas donde se puede buscar y Filtrar.
                            </li>
                            <li>
                                ✅Detalle: donde mostrara el detalle Receta.
                            </li>
                            <li>
                                ✅Creacion: se puede crear tanto recetas como dietas y podemos vincular entresi.
                            </li>
                        </ul>

                    </article>
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
                    <button>Deploy</button>
                    <button>Repositorio</button>
                </section>
                <Footer />
            </main>

        </div>
    )
}