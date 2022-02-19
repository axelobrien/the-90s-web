import randomGif from '../generators/Gif'

function Gif () {
	const gif = randomGif()
	
	return (<>
		<img src={gif} className='w-min aspect-auto max-h-40 mx-auto my-3' alt=''/>
	</>)
}

export default Gif
