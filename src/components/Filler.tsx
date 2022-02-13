import React, { useEffect, useRef } from 'react'
import randomColor from '../generators/Color'
import randomFont from '../generators/Font'
import randomFiller from '../generators/Filler'

function Filler() {
	const fillerRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
    if (fillerRef.current) {
      fillerRef.current.style.color = randomColor()
      fillerRef.current.style.fontFamily = randomFont()
    }
  }, [fillerRef])

	return (<>
		<h3 className='text-lg mx-auto my-5 w-1/2' ref={fillerRef}>{randomFiller()}</h3>
	</>)
}

export default Filler