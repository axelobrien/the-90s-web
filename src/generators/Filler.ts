export default function randomFiller() {
	const textList = [
		"Hello!! I'm writing this on 3/14/1997!!! My 12th birthdy!! my name is WALTER, and I just got my first personal computer!! I cant wait to use the world wide web!! remember to e-mail me at WALTER42812@aol.com!!!!",
		'HI!!!!!!! I got a personal computer today! Today I learned Hyper Text Markup Language (you can just call it HTML), and I am now able to write code. I am so excited!',
		'My name is Carlos and I am a certified cool kid! I am currently learning how to use the world wide web!!! I am so excited!!',
		'hello netizens! this is my first website so dont expect much, but I am learning how to use the world wide web. I cant wait to see what comes out of the information super highway! I am facinated by all things computers and the world wide web!',
	]
	const text = textList[Math.floor(Math.random() * textList.length)]
	return text
}