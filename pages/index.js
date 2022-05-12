import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kokomi&apos;s Hangout</title>
        <meta name="description" content="The website of the official Discord server." />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Kokomi&apos;s Oceanic Hangout
        </h1>

        <p className={styles.description}>
          The Official Discord Server site.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Fun and free &rarr;</h2>
            <p>We&apos;re a fun community, aren&apos;t too strict about rules, and we have lots of free bots to use from!</p>
          </a>

          <a className={styles.card}>
            <h2>Good Community &rarr;</h2>
            <p>We have a fun and respectful community - no hate allowed - and we support each other!</p>
          </a>

          <a className={styles.card}>
            <h2>Fun and cool bots &rarr;</h2>
            <p>We host cool bots that are always online, and they&apos;re fun to use!</p>
          </a>

          <a className={styles.card}>
            <h2>Giveaways &rarr;</h2>
            <p>
              We also throw giveaways pretty often, such as bot coins!
            </p>
          </a>
        </div>

        <div>
          <a href="https://discord.gg/fSCCDMC8cg"><button className={styles.button}/>Join now! &#xe164;<i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
          <a
            href="https://github.com/kokonut27"
          >
            &copy; 2022, kokonut
          </a>
        </div>
      </footer>
    </div>
  )
}
