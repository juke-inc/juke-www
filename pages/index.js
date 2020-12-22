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
          Goodbye, stale wiki articles. Hello, Juke.
        </h1>

        <p className={styles.description}>
          Collaborate, negotiate, and save money with the next-generation vendor management platform.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Features</h3>
            <ul>
              <li>💸  &nbsp; Clever financial nudges to save you time and money.</li>
              <li>📞  &nbsp; Dynamic address book to route you to the right haalp.</li>
              <li>🏷️  &nbsp; Flexible nesting and labeling to contextualize your vendor relationships.</li>
              <li>🔨  &nbsp; A whole lot more goodness to come!</li>
            </ul>
          </div>
        </div>

        <p className={styles.description}>
          Coming soon to a WFH set-up near you.
        </p>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
