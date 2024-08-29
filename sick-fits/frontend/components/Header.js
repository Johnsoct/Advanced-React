'use client'

// Packages
import Link from 'next/link'
import styled from 'styled-components'
// Components
import Nav from './Nav'

const Logo = styled.h1`
  background-color: red;
  color: blue;
`

export default function Header () {
  return (
    <header>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>

      <div className="sub-bar">
        <p>search</p>
      </div>

      <Nav />
    </header>
  )
}
