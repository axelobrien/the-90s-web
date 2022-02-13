export default function MarqueeText() {
	const textList = [
		'I love HTML!',
		'The \'net rocks!',
		'Computers are radical!',
		'I\'m a web developer!',
		'I\'m 100% cool.',
		'THIS TEXT IS IMPORTANT',
		'heeeeyyyyyyy',
		'This site is for certified cool people ONLY!!',
		'WEEEEEEEEE',
		'add me on myspace! my name is xX_coolguy69_Xx',
	]
	const text = textList[Math.floor(Math.random() * textList.length)]
	return text
}