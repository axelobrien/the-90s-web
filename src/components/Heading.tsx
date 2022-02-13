import { useRef, useEffect } from 'react'
import randomColor from '../generators/Color'
import randomFont from '../generators/Font'
import randomWelcome from '../generators/Welcome'

function Heading() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.color = randomColor()
      headingRef.current.style.fontFamily = randomFont()
    }
  }, [headingRef])
  
	return (
    <>
      <h1 className={`text-3xl text-center`} ref={headingRef}>{randomWelcome()}</h1>
    </>
  )
}

export default Heading