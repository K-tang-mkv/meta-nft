import Head from 'next/head'
import { hostname } from 'os'
import Header from "../components/Header"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Header/>
      <Hero />
    </>
    
  )
}

