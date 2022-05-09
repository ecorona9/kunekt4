import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../pages/navbar'

export default function About() {
  return (
    <div>
      <Head>
        <title>KUNEKT4</title>
      </Head>

      <Navbar/>

      <div className='about'>
        <h1>This is how we made this project</h1>
      </div>

    </div>
  )
}
