import ButtonLinkImage from '@components/button/buttonLinkImage'
import Image from 'next/image'
export default function CollaboratorsComp(): JSX.Element {
    return <main>
        <section>
            <header><h4>Zarina Alexía Milanesio</h4></header>
            <article>
                <Image
                    src="/../public/photo/collaborators/Ale.png"
                    width='100'
                    height='100'
                    alt='Ale'
                />
                <ButtonLinkImage
                    url='https://github.com/AlexiaMilanesio'
                    image='gitHub.webp'
                    alt='githubAle'
                />
                <ButtonLinkImage
                    url='https://www.linkedin.com/in/zarina-alexia-milanesio'
                    image='linkedin.png'
                    alt='linkedinAle'
                />
            </article>
        </section>
        <section>
            <header><h4>Francisco Sponton</h4></header>
            <article>
                <Image
                    src="/../public/photo/collaborators/Fran.png"
                    width='100'
                    height='100'
                    alt='fran'
                />
                <ButtonLinkImage
                    url='https://github.com/fsponton'
                    image='gitHub.webp'
                    alt='githubFran'
                />
                <ButtonLinkImage
                    url='https://www.linkedin.com/in/juan-francisco-sponton-moretti/'
                    image='linkedin.png'
                    alt='LinkedinFran'
                />
            </article>
        </section>
        <section>
            <header><h4>Mailin Adaro</h4></header>
            <article>
                <Image
                    src="/../public/photo/collaborators/Mailin.png"
                    width='100'
                    height='100'
                    alt='Mailin'
                />
                <ButtonLinkImage
                    url='https://github.com/mailinadaro'
                    image='gitHub.webp'
                    alt='githubMail'
                />
                <ButtonLinkImage
                    url='https://www.linkedin.com/in/mailinadarofullstackdeveloper/'
                    image='linkedin.png'
                    alt='LinkedinMain'
                />
            </article>
        </section>
        <section>
            <header><h4>Juan Lopez</h4></header>
            <article>
                <Image
                    src="/../public/photo/collaborators/Juan.png"
                    width='100'
                    height='100'
                    alt='Juan'
                />
                <ButtonLinkImage
                    url='https://github.com/Juanlopez01'
                    image='gitHub.webp'
                    alt='githubMail'
                />
                <ButtonLinkImage
                    url='https://www.linkedin.com/in/juanlopez01/'
                    image='linkedin.png'
                    alt='LinkedinJuan'
                />
            </article>
        </section>
    </main>
}






