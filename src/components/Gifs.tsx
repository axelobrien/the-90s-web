import randomGif from '../generators/Gif'

function Gif () {
	const gif = randomGif()
	
	return (<>
		<img src={gif} className='w-min max-h-40 mx-auto' alt="A gif straight from the 90's"/>
	</>)
}

export default Gif
