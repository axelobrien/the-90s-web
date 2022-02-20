import { useEffect, useRef} from 'react'
import randomColor from '../generators/Color'
import fromList from '../generators/FromList'
import randomSite, { listLength } from '../generators/Site'
import WebsiteListItem from './WebsiteListItem'

function List() {
  const headingRef = useRef<HTMLParagraphElement>(null)

	const listItems = randomSite(Math.floor(Math.random() * listLength))

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.color = randomColor()
			headingRef.current.style.backgroundColor = randomColor()
      headingRef.current.style.fontFamily = fromList('fonts')
    }
  }, [headingRef])

	return (<>
		<div ref={headingRef} className='w-max mx-auto my-2 p-4  max-w-[90%]'>
			<p className='text-2xl text-center w-max mx-auto'>My web portal:</p>
			<ul className='text-center'>
				{listItems.map((item, idx) =>
					<WebsiteListItem {...item} key={idx} />
				)}
			</ul>
		</div>
	</>)
}

export default List