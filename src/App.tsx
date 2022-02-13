import React, { useEffect } from 'react'
import Heading from './components/Heading'
import Gif from './components/Gifs'
import Filler from './components/Filler'
import List from './components/List'
import randomBackground from './generators/Background'
import Marquee from './components/Marquee'

function App() {
  useEffect(() => {
    randomBackground()
  }, [])

  return (
    <>
      <Heading/>
      <Gif/>
      <Filler/>
      {Math.random() > 0.5 && <List/>}
      <Marquee/>
      {Math.random() > 0.5 && <Gif/>}
    </>
  )
}

export default App
