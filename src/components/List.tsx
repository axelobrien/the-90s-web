import React, { useEffect, useRef} from 'react'
import randomColor from '../generators/Color'
import randomFont from '../generators/Font'
import randomSite from '../generators/Site'
import WebsiteListItem from './WebsiteListItem'

function List() {
  const headingRef = useRef<HTMLParagraphElement>(null)

	const listItems = randomSite(Math.floor(Math.random() * 3))

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.color = randomColor()
			headingRef.current.style.backgroundColor = randomColor()
      headingRef.current.style.fontFamily = randomFont()
    }
  }, [headingRef])

	return (<div ref={headingRef} className='w-max mx-auto p-4'>
		<p className='text-2xl text-center w-max mx-auto'>My web portal:</p>
		<ul className='text-center'>
			{listItems.map((item, idx) => <WebsiteListItem {...item} key={idx} />)}
		</ul>
	</div>)
}

export default List