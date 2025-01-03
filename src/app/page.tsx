import Hero from '../components/Hero'
import dynamic from 'next/dynamic'

const About = dynamic(() => import('../components/About'), { ssr: true })
const Projects = dynamic(() => import('../components/Projects'), { ssr: true })
const Research = dynamic(() => import('../components/Research'), { ssr: true })

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Research />
    </>
  )
} 