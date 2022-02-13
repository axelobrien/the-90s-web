import React, { useRef, useEffect } from 'react'
import randomGif from '../generators/Gif'

function Gifs () {
	const gif = randomGif()
	
	return (<>
		<img src={gif} className='w-min max-h-40 mx-auto'/>
	</>)
}

export default Gifs
