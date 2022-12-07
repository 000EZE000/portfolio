import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '@components/navbar'

export default function Skills(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezequiel Sosa</title>
      </Head>
      <Nav />
      <h1>{"ESTE PORFOLIO ESTA EN DESARROLO :)"}</h1>
    </div>
  )
}
