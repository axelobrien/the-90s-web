import { useEffect, useRef } from "react"
import randomColor from "../generators/Color"
import fromList from "../generators/FromList"
import randomMarquee from "../generators/FromList"

function Marquee() {
	const marqueeRef = useRef<HTMLDivElement>(null)
	const marqueeTextRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		if (marqueeRef.current && marqueeTextRef.current) {
			marqueeRef.current.style.borderColor = randomColor()
			marqueeTextRef.current.style.color = randomColor()
			marqueeTextRef.current.style.fontFamily = fromList('fonts')
		}
	}, [marqueeRef])
	
	return (<>
		<div className='overflow-hidden border-4 m-5 w-5/6 md:w-1/3 mx-auto' ref={marqueeRef}>
			<div className="animate-marquee10">
				<p className='text-white text-2xl w-max animate-marqueeText10' ref={marqueeTextRef}>
					{randomMarquee('sentences')}
				</p>
			</div>
		</div>
	</>)
}

export default Marquee