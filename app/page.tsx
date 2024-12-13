'use client'

import { useState } from 'react'
import Header from './sections/header'
import Features from './sections/features'
import Contact from './sections/contact'

export default function Home() {
  return (
    <div className="bg-white">
      <Header></Header>
      <Features></Features>
      <Contact></Contact>
    </div>
  )
}
