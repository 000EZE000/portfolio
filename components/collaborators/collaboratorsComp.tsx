import ButtonLinkImage from '@components/button/buttonLinkImage'
import Image from 'next/image'
import style from "./style/style.module.css"
export default function CollaboratorsComp(): JSX.Element {
    return <main className={style.container_section}>
        <section className={style.section} >
            <header className={style.header}>Zarina Alexía Milanesio</header>
            <article>
                <Image
                    src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707787/photo/collaborators/kqtnp4mtvzefjgrgwdni.png"

                    width='150'
                    height='150'

                    alt='Ale'
                />
                <div>
                    <ButtonLinkImage
                        url='https://github.com/AlexiaMilanesio'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/gcjvuqlzfwhdss0jlrtp.webp'
                        alt='githubAle'
                    />
                    <ButtonLinkImage
                        url='https://www.linkedin.com/in/zarina-alexia-milanesio'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/fhtzoz4b5aqgm7km8dml.png'
                        alt='linkedinAle'
                    />
                </div>
            </article>
        </section>
        <section className={style.section} >
            <header className={style.header}>Francisco Sponton</header>
            <article>
                <Image
                    src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707787/photo/collaborators/iaa5e1jelctrj3cx4xbh.png"
                    width='150'
                    height='150'

                    alt='fran'
                />
                <div>
                    <ButtonLinkImage
                        url='https://github.com/fsponton'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/gcjvuqlzfwhdss0jlrtp.webp'
                        alt='githubFran'
                    />
                    <ButtonLinkImage
                        url='https://www.linkedin.com/in/juan-francisco-sponton-moretti/'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/fhtzoz4b5aqgm7km8dml.png'
                        alt='LinkedinFran'
                    />
                </div>
            </article>
        </section>
        <section className={style.section} >
            <header className={style.header}>Mailin Adaro</header>
            <article>
                <Image
                    src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707788/photo/collaborators/f1a67rbuqizziphxdvqv.png"

                    width='150'
                    height='150'

                    alt='Mailin'
                />
                <div>
                    <ButtonLinkImage
                        url='https://github.com/mailinadaro'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/gcjvuqlzfwhdss0jlrtp.webp'
                        alt='githubMail'
                    />
                    <ButtonLinkImage
                        url='https://www.linkedin.com/in/mailinadarofullstackdeveloper/'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/fhtzoz4b5aqgm7km8dml.png'
                        alt='LinkedinMain'
                    />
                </div>
            </article>
        </section>
        <section className={style.section} >
            <header className={style.header}>Juan Lopez</header>
            <article>
                <Image
                    src="https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707787/photo/collaborators/fmzru6spnhogwtidg6ih.png"

                    width='150'
                    height='150'

                    alt='Juan'
                />
                <div>
                    <ButtonLinkImage
                        url='https://github.com/Juanlopez01'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/gcjvuqlzfwhdss0jlrtp.webp'
                        alt='githubMail'
                    />
                    <ButtonLinkImage
                        url='https://www.linkedin.com/in/juanlopez01/'
                        image='https://res.cloudinary.com/dqhbskhe7/image/upload/v1670707786/photo/linkedin-github/fhtzoz4b5aqgm7km8dml.png'
                        alt='LinkedinJuan'
                    />
                </div>
            </article>
        </section>
    </main>
}






