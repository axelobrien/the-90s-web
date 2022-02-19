import React, { useRef, useEffect } from 'react'
import randomColor from '../generators/Color'
import fromList from '../generators/FromList'

function Blink() {
	const paragraphRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		if (paragraphRef.current) {
			paragraphRef.current.style.color = randomColor()
			paragraphRef.current.style.fontFamily = fromList('fonts')
		}
	}, [paragraphRef])
	
	return (<>
		<p className='animate-blink mx-auto text-2xl' ref={paragraphRef}>
			{fromList('sentences')}
		</p>
	</>)
}

export default Blink