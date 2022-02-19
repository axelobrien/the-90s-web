type listType = 'sentences' | 'fonts' | 'paragraphs' | 'foregroundGifs' | 'backgroundGifs' | 'welcomes'

export default function fromList(list: listType) {
  const List = require(`../data/${list}.json`)
	const item = List[Math.floor(Math.random() * List.length)]
	return item
}