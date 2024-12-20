'use client'

import Header from './sections/header'
import Features from './sections/features'
import Contact from './sections/contact'
import Mobile from './sections/mobile'
import { features } from 'process'

export default function Home() {
  return (
    <div className="bg-white">
      <Header id="header" />
      <Mobile id="mobile" />
      <Features id="features" />
      <Contact id="contact" />
    </div>
  )
}
