import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import Ourwork from './components/Ourwork'
import Teams from './components/Teams'
import Contactus from './components/Contactus'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : 'light'
  )

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  // Mouse position
  const mouse = useRef({ x: 0, y: 0 })

  // Smooth cursor position
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {

      // Smooth movement
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.1

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.1

      // Move cursor
      if (dotRef.current && outlineRef.current) {

        // Dot
        dotRef.current.style.transform =
          `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`

        // Ring
        outlineRef.current.style.transform =
          `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])

  return (
    <div className='dark:bg-black relative'>

      <Toaster />

      <Navbar
        theme={theme}
        setTheme={setTheme}
      />

      <Hero />

      <Trustedby />

      <Services />

      <Ourwork />

      <Teams />

      <Contactus />

      <Footer theme={theme} />


      {/* Custom Cursor Ring */}

      <div
        ref={outlineRef}
        className='fixed top-0 left-0 h-10 w-10 rounded-full border 
        border-primary pointer-events-none z-[9999]'   style={ {transition: 'transform 0.1s ease-out'}}
      >
      </div>


      {/* Custom Cursor Dot */}

      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'
      >
      </div>

    </div>
  )
}

export default App
