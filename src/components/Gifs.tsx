import fromList from "../generators/FromList"

function Gif () {
	const gif = fromList('foregroundGifs')
	
	return (<>
		<img src={gif} className='w-min aspect-auto max-h-40 mx-auto my-3' alt=''/>
	</>)
}

export default Gif
