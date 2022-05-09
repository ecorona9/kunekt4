import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../pages/navbar'
import Board from '../pages/board'

export default function Home() {
  return (
    <div>
      <Head>
        <title>KUNEKT4</title>
      </Head>

      <Navbar/>

      <Board/>

    </div>
  )
}
