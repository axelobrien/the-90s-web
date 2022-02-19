import React, { useEffect, useRef } from "react"
import randomColor from "../generators/Color"
import randomFont from "../generators/Font"
import randomMarquee from "../generators/Marquee"

function Marquee() {
	const marqueeRef = useRef<HTMLDivElement>(null)
	const marqueeTextRef = useRef<HTMLParagraphElement>(null)

	useEffect(() => {
		if (marqueeRef.current && marqueeTextRef.current) {
			marqueeRef.current.style.borderColor = randomColor()
			marqueeTextRef.current.style.color = randomColor()
			marqueeTextRef.current.style.fontFamily = randomFont()
		}
	}, [marqueeRef])
	
	return (
		<div className='overflow-hidden border-4 m-5 w-5/6 md:w-1/3 mx-auto' ref={marqueeRef}>
			<div className="animate-marquee10">
				<p className='text-white text-2xl w-max animate-marqueeText10' ref={marqueeTextRef}>
					{randomMarquee()}
				</p>
			</div>
		</div>
	)
}

export default Marquee