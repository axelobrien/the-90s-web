export default function() {
	const gifList = [
		undefined,
		'https://web.archive.org/web/20090821222115/http://geocities.com/SunsetStrip/Lounge/7650/dollarspindownd.gif',
		'https://blog.archive.org/wp-content/uploads/2016/10/dancing_baby.gif',
		'https://blog.archive.org/wp-content/uploads/2016/11/landing-a.gif',
		'https://blog.archive.org/wp-content/uploads/2016/11/surfcpu.gif',
		'https://blog.archive.org/wp-content/uploads/2016/11/line.gif',
		'https://i.imgur.com/r6lnOJ6.gif',
		'https://media0.giphy.com/media/xvKkJXBpjW4m5VAVks/giphy.gif?cid=6c09b952jj7naa0lmfhk9lcyg26nwdlfxe2d1a52l8ksowjv&rid=giphy.gif&ct=s',
		'https://gifcities.org/assets/loading1.gif',
		'https://web.archive.org/web/20090724101500/http://www.geocities.com/pashathecat/Gifs_Jpgs/cs_ani_rainbowwalkcat.gif',
		'https://web.archive.org/web/20090830034125/http://www.geocities.com/dogandcatwars/dogandcatwars.gif',
		'https://web.archive.org/web/20090829061459/http://geocities.com/reyjascats/cat-relaxing.gif',
		'https://preview.redd.it/qvx8irtxhff81.jpg?width=640&crop=smart&auto=webp&s=a79bba6ab62b9aa73d6b79283431c65a8fa88d8b',
		'https://web.archive.org/web/20091023224141/http://geocities.com/catsareus_2000/CATONPIANO.gif',
		'https://web.archive.org/web/19970222175012im_/http://www1.geocities.com/Yosemite/8866/netscpe3.gif',
		'https://web.archive.org/web/20091021214904/http://www.geocities.com/mycatmaomao/x-hikashi13.gif',
	]
	const gif = gifList[Math.floor(Math.random() * gifList.length)]
	return gif
}