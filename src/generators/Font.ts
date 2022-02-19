export default function randomFont() {
	const fonts = ["Comic Sans MS", "Comic Sans", "Courier New", "impact", "Times New Roman", ]
	return fonts[Math.floor(Math.random() * fonts.length)]
}