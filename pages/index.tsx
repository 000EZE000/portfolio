import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ezequiel Sosa</title>
      </Head>
      <h1>{"ESTE PORFOLIO ESTA EN DESARROLO :)"}</h1>
    </div>
  )
}
