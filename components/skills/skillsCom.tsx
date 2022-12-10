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
            image: `https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707787/image-skills/hard/kym4ktp2bt5qyoxxyvwa.png`
        }, {
            title: 'CSS',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/onnt6gfqvgzt2hdgsxro.png'
        }, {
            title: 'HTML',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707787/image-skills/hard/vtey4tvdv0jq2cklcz0z.png'
        }, {
            title: 'React',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/image-skills/hard/s6oyei445tr4en1rmki2.png'
        }, {
            title: 'Redux',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/image-skills/hard/iukdjdzwwjnz44ql0hjq.png'
        }, {
            title: 'Sequelize',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707785/image-skills/hard/xbstidxcgclacnesgdts.png'
        }, {
            title: 'Postgres',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/jwudkux9ptn7gszy98ea.png'
        }, {
            title: 'Nextjs',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707785/image-skills/hard/delriaafdtiu2zsppnug.png'
        }, {
            title: 'Prisma',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707787/image-skills/hard/ibkjgxrwny6vpi54vneg.webp'
        }, {
            title: 'Typescript',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/image-skills/hard/vnyv1od3zhmef4gwyoog.png'
        }, {
            title: 'Vercel',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/qur929chfpvyiapdu83z.png'
        }, {
            title: 'AWS Amazon',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/image-skills/hard/llxjhr1lpo0hiqeb4hhe.png'
        }, {
            title: 'Express',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/ra0s8osdddgfktnymhze.png'
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
