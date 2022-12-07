import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '@components/navbar'
import AboutComponents from '@components/about'

export default function About(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezequiel Sosa</title>
      </Head>
      <Nav />
      <AboutComponents />
    </div>
  )
}
