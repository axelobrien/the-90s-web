import { useState, useEffect, useRef } from 'react'

import Heading from './components/Heading'
import Gif from './components/Gifs'
import Filler from './components/Filler'
import List from './components/List'
import Marquee from './components/Marquee'
import Blink from './components/Blink'
import Footer from './components/Footer'

import fromList from './generators/FromList'

function App() {
  const [rerenders, setRerenders] = useState(0)
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const image = fromList('backgroundGifs')
    const docStyle = document.body.style
	  docStyle.backgroundImage = `url(${image})`
    docStyle.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)

    const btn = btnRef.current
    if (btn) {
      const btnStyle = btn.style
      btnStyle.fontFamily = fromList('fonts')
    }

  }, [rerenders])

  // randomly shuffles an array
  function shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
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
      {/* This state is just to rerender this component */}
      <button onClick={() => setRerenders(rerenders + 1)} className='bg-black text-white underline hover:text-red-700 active:text-blue-700 mx-auto px-3 py-1 text-2xl mb-5' ref={btnRef}>
        Click me for a new site!!
      </button>
      <Heading/>
      {elementList}
      {Math.random() > 0.5 && <Gif/>}
      <Footer/>
    </>
  )
}

export default App
