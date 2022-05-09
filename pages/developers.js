import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../pages/navbar'


export default function Developers() {
  return (
    <div>
      <Head>
        <title>KUNEKT4</title>
      </Head>

      <Navbar/>

      <div className='devs'>
        <h1>list of people who made this project</h1>
      </div>

    </div>
  )
}
