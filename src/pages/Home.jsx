import React from 'react'
import Header from "../components/Header";
import '../styles/global.css';
import Hero from "../components/Hero";
import SectionBen from "../components/SectionBen";
function Home() {
  return (
    <div>
        <Header></Header>
        <Hero></Hero>
        <SectionBen></SectionBen>
      </div>
  )
}

export default Home