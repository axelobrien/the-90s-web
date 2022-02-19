import { useEffect, useRef } from 'react'
import randomColor from '../generators/Color'
import fromList from '../generators/FromList'

function Filler() {
	const fillerRef = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
    if (fillerRef.current) {
      fillerRef.current.style.color = randomColor()
      fillerRef.current.style.fontFamily = fromList('fonts')
    }
  }, [fillerRef])

	return (<>
		<h3 className='text-lg mx-auto my-5 w-5/6 md:w-1/2' ref={fillerRef}>
			{fromList('paragraphs')}
		</h3>
	</>)
}

export default Filler