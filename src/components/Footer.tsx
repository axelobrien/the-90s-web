import { useRef, useEffect } from 'react'
import randomColor from '../generators/Color'
import fromList from '../generators/FromList'
import links from '../data/footerLinks.json'

function Footer() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (divRef.current) {
      const styles = divRef.current.style
      styles.color = randomColor()
      styles.backgroundColor = randomColor()
      styles.fontFamily = fromList('fonts')
    }
  }, [divRef])

  return (<>
    <div className='flex flex-row justify-evenly flex-wrap md:min-w-max md:w-1/2 w-full mx-auto p-4' ref={divRef}>
      {links.map((link, index) => (
        <a className='underline mx-3 md:my-0 my-3 hover:text-red-700 active:text-blue-700' href={link.url} target={'_blank'} key={index}>
          {link.title}
        </a>
      ))}
    </div>
  </>)
}

export default Footer