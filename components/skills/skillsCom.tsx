import HeadComp from '@components/head/headComp'
import { ImageTitleHard } from '..'
import style from './style/style.module.css'
import Nav from '@components/navbar/navbarComp'
import Footer from '@components/footer/footerComp'

export default function SkillsComp() {
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
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670952420/image-skills/hard/nxx63karjnn6mnwsnmgf.png'
        }, {
            title: 'Redux',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670952318/image-skills/hard/zkgj3f7bzy0ykfru5w0e.png'
        }, {
            title: 'Sequelize',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670952610/image-skills/hard/xjudpruosgxloozbsf2p.png'
        }, {
            title: 'Postgres',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/jwudkux9ptn7gszy98ea.png'
        }, {
            title: 'Nextjs',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707785/image-skills/hard/delriaafdtiu2zsppnug.png'
        }, {
            title: 'Prisma',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670952528/image-skills/hard/oacpazmvaprvzsaxq55a.png'
        }, {
            title: 'Typescript',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/image-skills/hard/vnyv1od3zhmef4gwyoog.png'
        }, {
            title: 'Vercel',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/qur929chfpvyiapdu83z.png'
        }, {
            title: 'AWS',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707789/image-skills/hard/llxjhr1lpo0hiqeb4hhe.png'
        }, {
            title: 'Express',
            image: 'https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/image-skills/hard/ra0s8osdddgfktnymhze.png'
        },
    ]
    return <div className={style.div_father}>
        <HeadComp
            title='Habilidades'
            ico='eze.ico'
        />
        <Nav />
        <main>
            <section>
                <header className={style.title}>Soft Skills</header>
                <article className={style.article}>
                    <span className={style.span}>
                        Trabajo en equipo
                    </span>
                    <span className={style.span}>
                        Resolución de problemas
                    </span>
                    <span className={style.span}>
                        Comunicación
                    </span>
                    <span className={style.span}>
                        Adaptabilidad
                    </span>
                    <span className={style.span}>
                        Pensamiento crítico
                    </span>
                    <span className={style.span}>
                        Manejo de conflictos
                    </span>
                    <span className={style.span}>
                        Liderazgo
                    </span>

                </article>
            </section>
            <section>
                <div className={style.container_title}><header className={style.title_hard}>Hard Skills</header></div>
                <article className={style.article_hard}>
                    {ImageTitleHard({ pack })}
                </article>
            </section>
        </main>
        <Footer />
    </div>

}
