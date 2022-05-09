import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/developers">
            <a>Developers</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <h1 className='title'>KUNEKT4</h1>
    </div>
  )
}
