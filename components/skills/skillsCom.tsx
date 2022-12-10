import HeadComp from '@components/head/headComp'
import { ImageTitleHard } from '..'

import Nav from '@components/navbar/navbarComp'
import Footer from '@components/footer/footerComp'

export default function SkillsComp(): JSX.Element {
    interface pack {
        title: string
        image: string
    }
    const pack: pack[] = [
        {
            title: 'Javascript',
            image: `javascript.png`
        }, {
            title: 'CSS',
            image: 'css.png'
        }, {
            title: 'HTML',
            image: 'html5.png'
        }, {
            title: 'React',
            image: 'react.png'
        }, {
            title: 'Redux',
            image: 'redux.png'
        }, {
            title: 'Sequelize',
            image: 'sequelize.png'
        }, {
            title: 'Postgres',
            image: 'postgres.png'
        }, {
            title: 'Nextjs',
            image: 'nextjs.png'
        }, {
            title: 'Prisma',
            image: 'prisma.webp'
        }, {
            title: 'Typescript',
            image: 'typescript.png'
        }, {
            title: 'Vercel',
            image: 'vercel.png'
        }, {
            title: 'AWS Amazon',
            image: 'aws.png'
        },
    ]

    return <div>
        <HeadComp
            title='Habilidades'
            ico='eze.ico'
        />
        <Nav />
        <main>
            <section>
                <header>Soft Skills</header>
                <article>
                    <ul>
                        <li>
                            Trabajo en equipo
                        </li>
                        <li>
                            Resolución de problemas
                        </li>
                        <li>
                            Comunicación
                        </li>
                        <li>
                            Adaptabilidad
                        </li>
                        <li>
                            Pensamiento crítico
                        </li>
                        <li>
                            Manejo de conflictos
                        </li>
                        <li>
                            Liderazgo
                        </li>
                    </ul>
                </article>
            </section>
            <section>
                <header>Hard Skills</header>
                <article>
                    <ImageTitleHard pack={pack} />
                </article>
            </section>
            <section>
                <header>Ingles</header>
                <article>
                    <p>Por el momento Ingles tecnico</p>
                </article>
            </section>
        </main>
        <Footer />
    </div>

}
