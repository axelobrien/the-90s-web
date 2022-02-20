import { useRef, useEffect } from 'react'
import randomColor from '../generators/Color'
import fromList from '../generators/FromList'

function Heading() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.color = randomColor()
      headingRef.current.style.fontFamily = fromList('fonts')
    }
  }, [headingRef])
  
	return (<>
    <p className={`text-3xl text-center mb-3`} ref={headingRef}>
      {fromList('welcomes')}
    </p>
  </>)
}

export default Heading