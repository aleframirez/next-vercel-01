import { FC } from 'react'
import Head from 'next/head'
import { NavBar } from '../NavBar'
import styles from './Home.module.css'

type Props = {
  children: React.ReactNode;
}

export const MainLayout: FC <Props>= ({ children }) => {
   return (
      <>
        <Head>
          <title>Home - Rami</title>
          <meta name="description" content="Home Page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <NavBar/>
  
        <main className={styles.main}>  
         { children }
        </main>
      </>
    )
}
