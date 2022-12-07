import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pre.module.css'
import Nav from '@components/navbar'
export default function Home() {
  return (
    <div className={styles.pre}>
      <Head>
        <title>Ezequiel Sosa</title>
      </Head>
      <Nav />
      <h1 >{"ESTE PORFOLIO ESTA EN DESARROLO :)"}</h1>
      <Image
        src='https://media.tenor.com/WM0VMqg2s2sAAAAM/work-cat.gif'
        width='400'
        height='400'
        alt='cat'
      />
    </div>
  )
}
