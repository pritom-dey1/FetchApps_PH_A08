import React from 'react'
import Navbar from '../Components/NavBar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer/Footer'

const RootLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
        <Footer></Footer>
    </div>
  )
}

export default RootLayout