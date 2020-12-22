import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juke</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Goodbye, wiki article from five years ago.
        </h1>

        <p className={styles.description}>
          Collaborate, negotiate, and save money with Juke's vendor management.
        </p>

        <p className={styles.description}>
          Coming soon.
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
