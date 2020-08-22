import Head from 'next/head'
import Layout from '../components/layout'
import Carousel from '../components/carousel'
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

/*

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Cube Root Live</title>
      </Head>
      <Carousel/>
    </Layout>
    
  )
}*/

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={signIn}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={signOut}>Sign out</button>
    </>}
  </>
}