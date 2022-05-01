import Image from 'next/image'
import Navbar from '@components/Navbar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food4you</title>
      </Head>
      <Navbar />
    </div>
  )
}
