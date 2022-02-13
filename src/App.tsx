import React, { useEffect } from 'react'
import Heading from './components/Heading'
import Gifs from './components/Gifs'
import Filler from './components/Filler'
import List from './components/List'
import randomBackground from './generators/Background'

function App() {
  useEffect(() => {
    randomBackground()
  }, [])

  return (
    <>
      <Heading/>
      <Gifs/>
      <Filler/>
      {Math.random() > 0.5 && <List/>}
    </>
  )
}

export default App
