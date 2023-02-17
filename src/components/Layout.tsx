import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ILayoutProps {
  children?: ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="m-12">
      <Head>
        <title>Tina App</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link className="text-primary" href="/">
          Home
        </Link>
        {' | '}
        <Link className="text-primary" href="/posts">
          Posts
        </Link>
        {' | '}
        <Link className="text-primary" href="/button">
          Button
        </Link>
      </header>
      <main>{children}</main>
    </div>
  )
}
