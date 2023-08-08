import Head from "next/head"
import Link from "next/link"
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: "Master770"
}
export default function Home() {
  return (
    <main>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Master770</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link href={"#"}>About</Link></li>
            <li><Link href={"#"}>Projects</Link></li>
            <li><Link href={"#"}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </main>
  )
}