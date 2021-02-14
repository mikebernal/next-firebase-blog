import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Link href="/jano/gibson">
        <a>link</a>
      </Link>
    </div>
  )
}
