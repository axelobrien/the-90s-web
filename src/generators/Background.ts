import React from 'react'

function randomBackground() {
	const images = [
		null,
		'https://web.archive.org/web/20060929142135/http://www.geocities.com/sags13/spacebackground.gif',
		'https://web.archive.org/web/20091027005042/http://www.geocities.com/statueoflove2000/background.gif',
		'https://web.archive.org/web/20091019141204/http://www.geocities.com/littleyellowfur2000/Backgrounds/background15.gif',
		'https://web.archive.org/web/20091027015756/http://www.geocities.com/brokenheadtrailblazers/snowfall_blue_background.gif',
		'https://web.archive.org/web/20091023162733/http://www.geocities.com/catmaster30809/bg18.gif',
	]
	const image = images[Math.floor(Math.random() * images.length)]
	document.body.style.backgroundImage = `url(${image})`
}

export default randomBackground