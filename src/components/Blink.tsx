import React, { useRef, useEffect } from 'react'
import randomColor from '../generators/Color'
import randomText from '../generators/Marquee'
import randomFont from '../generators/Font'

function Blink() {
	const paragraphRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		if (paragraphRef.current) {
			paragraphRef.current.style.color = randomColor()
			paragraphRef.current.style.fontFamily = randomFont()
		}
	}, [paragraphRef])
	
	return (<>
		<p className='animate-blink mx-auto text-2xl' ref={paragraphRef}>
			{randomText()}
		</p>
	</>)
}

export default Blink