import siteList from '../data/sites.json'

const listLength = siteList.length

function randomSiteList(idxStart: number) {
	const finalSitesList = []
	if (idxStart < 0 ) {
		idxStart = 0
	} else if (idxStart >= siteList.length) {
		idxStart = siteList.length - 4
	}

	for (let i = 0; i < 3; i++) {
		if (idxStart + i < siteList.length) {
			finalSitesList.push(siteList[idxStart + i])
		} else {
			finalSitesList.push(siteList[idxStart + i - siteList.length])
		}
	}
	return finalSitesList
}

export default randomSiteList
export { listLength }