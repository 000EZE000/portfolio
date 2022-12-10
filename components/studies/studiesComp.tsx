import HeadComp from '@components/head/headComp'
import Image from 'next/image'
import Nav from '@components/navbar/navbarComp'
import Footer from '@components/footer/footerComp'
import Link from 'next/link'
export default function StudiesComp(): JSX.Element {
    return <div>
        <HeadComp
            title='Estudios'
            ico="eze.ico"
        />
        <Nav />
        <main>
            <h1>Estudios</h1>
            <section>
                <header>
                    <h2>Bootcamp</h2>
                    <Image
                        src='/../public/static/logo-studies/HENRY.png'
                        width='1000'
                        height='200'
                        alt='Henry'
                    />
                </header>
                <article>
                    <h2>Titulo obtenido</h2>
                    <Image
                        src='/../public/static/certificate/CertificadoFullStack.png'
                        width='500'
                        height='500'
                        alt='certificate'
                    />
                    <article>
                        <ul>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Express</li>
                            <li>Sequilize</li>
                            <li>Postgres</li>
                        </ul>
                    </article>
                </article>
                <article>
                    <p>Duracion: 4 meses</p>
                    <Link href='https://certificates.soyhenry.com/cert?id=179ebaf8-eec5-4196-be85-854fd353773a' >Certificado</Link>
                </article>
            </section>
            <hr />
            <section>
                <header>
                    <h3>Autodidacta</h3>
                    <Image
                        src='/../public/static/logo-studies/autodidacta.jpg'
                        width='1000'
                        height='400'
                        alt='autodidacta'
                    />
                </header>


                <article>
                    <ul>
                        <li>Next js</li>
                        <li>Prisma (ORM)</li>
                        <li>Redux Toolkit-Persit</li>
                        <li>Typescript</li>
                        <li>NextAuth</li>
                        <li>Auth0</li>
                        <li>Cloudinary</li>
                        <li>Nodemailer</li>
                    </ul>
                </article>
            </section>
        </main>
        <Footer />
    </div>

}
