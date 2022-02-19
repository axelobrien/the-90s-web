import React, { useEffect } from 'react'
import Heading from './components/Heading'
import Gif from './components/Gifs'
import Filler from './components/Filler'
import List from './components/List'
import randomBackground from './generators/Background'
import Marquee from './components/Marquee'
import Blink from './components/Blink'

function App() {
  useEffect(() => {
    randomBackground()
  }, [])

  function shuffle<T>(array: T[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const elementList = [
    <Gif />,
    <Filler />,
    <List />,
    <Marquee />,
    <Blink />
  ]

  shuffle(elementList)

  return (
    <>
      <Heading/>
      {elementList}
      {Math.random() > 0.5 && <Gif/>}
    </>
  )
}

export default App
