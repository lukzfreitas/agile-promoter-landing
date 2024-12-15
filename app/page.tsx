'use client'

import Header from './sections/header'
import Features from './sections/features'
import Contact from './sections/contact'
import Mobile from './sections/mobile'

export default function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Mobile></Mobile>
      <Features></Features>
      <Contact></Contact>
    </div>
  )
}
