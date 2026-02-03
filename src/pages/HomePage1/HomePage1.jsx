import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import PaymentGateway from '../../components/PaymentGateway/PaymentGateway'
import PaymentMethods from '../../components/PaymentMethods/PaymentMethods'
import Footer from '../../components/Footer/Footer'
import TeamSection from '../../components/TeamSection/TeamSection'

export default function HomePage1() {
  return (
    <div>
        <Header />
        <Hero />
        <PaymentGateway />
        <TeamSection />
        <PaymentMethods />
        <Footer />
    </div>
  )
}
