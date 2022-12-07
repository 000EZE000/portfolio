import Footer from "@components/footer"

export default function HealthyLife(): JSX.Element {
    return (
        <div>
            <main>
                <section>
                    <header><h1>Healthy Life</h1></header>
                    <article>
                        <p>
                            El proyecto individual de Henry era un gran desafio, porque
                            era un proyecto que requeria todos los conocimiento aprendidos en el
                            Bootcamp y solo podiamos usar las tecnologias ense;adas por el mismo.
                        </p>
                        <p>
                            Tecnologias Usadas
                        </p>
                        <article>
                            <ul>
                                <p>Front end</p>
                                <li>
                                    Javascript
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
                                    Redux
                                </li>
                            </ul>
                            <ul>
                                <p>Back end</p>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    Express
                                </li>
                                <li>
                                    Node js
                                </li>
                            </ul>
                            <ul>
                                <p>Bases de Datos</p>
                                <li>
                                    Javascript
                                </li>
                                <li>
                                    sequileze
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
                            </ul>
                        </article>
                        <p>
                            Utilise una API sponocular donde podia cargar la base de datos (solo una request)
                        </p>
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