export default function randomFont() {
	const fonts = ["Cursive", "courier_new", "georgia", "impact", "times_new_roman", "trebuchet_ms"]
	return fonts[Math.floor(Math.random() * fonts.length)]
}