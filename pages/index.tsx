import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/pre.module.css'
import Nav from '@components/navbar'
import { useRouter } from 'next/router'
import Footer from '@components/footer'
export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.pre}>
      <Head>
        <title>Ezequiel Sosa</title>
      </Head>
      <Nav />
      <main>
        <section>
          <header><h1>EZEQUIEL SOSA - FULL STACK DEVELOPER</h1></header>
          {/* imagen */}
          <article>
            <p>Bienvenidos a Mi Portfolio</p>
            <p>Una cosistas de mi</p>
            <p>
              Me gusta los desafios y busco diferentes soluciones para cada problema,
              como el proyecto <a href="#Healthy-Life">Healthy-Life</a> que requirio toda la disiplina y disposicion
              para poder completarlo en tiempo y forma.
            </p>
            <p>
              Me integro bien en grupo, me gusta poder compartir conocimientos o entre todos podamos
              solucionar un problema, en el Proyecto <a href="#Sirun-Pâtisserie">Sirun Pâtisserie </a>
              fue un proyecto que fue realizado por 5 personas.
            </p>
          </article>
          <section>
            <header><h2>Proyectos</h2></header>
            <div>
              <section>
                <header id='Healthy-Life'><h3>Healthy-Life 🍲</h3></header>
                <article>
                  <p>Proyecto individual de Soy Henry</p>
                  <p>
                    Es una App de Recetas de comidas clasificada por Dietas.
                  </p>
                  <p>
                    <Link href='/project/Healthy-Life'>Mas detalles</Link>
                  </p>
                </article>
                <div>
                  <button>Ir al Pagina web</button>
                  <button>Ir al Repositorio</button>
                </div>
              </section>
            </div>
            <div>
              <section>
                <header id='Sirun-Pâtisserie'><h3>Sirun Pâtisserie</h3></header>
                <Image
                  src='/../public/logo/sirun-logo.png'
                  width='150'
                  height='150'
                  alt='Sirun'
                />
                <article>
                  <p>Proyecto Final de Soy Henry</p>
                  <p>
                    Es un E-commerce orientado al
                  </p>
                  <p>
                    <Link href='/project/Sirun-Patisseri'>Mas detalles</Link>
                  </p>
                </article>
                <div>
                  <button>Ir al Pagina web</button>
                  <button>Ir al Repositorio</button>
                </div>
              </section>
            </div>
          </section>
        </section>
        <Image
          src='https://media.tenor.com/WM0VMqg2s2sAAAAM/work-cat.gif'
          width='400'
          height='400'
          alt='cat'
        />
      </main>
      <Footer />
    </div>
  )
}
