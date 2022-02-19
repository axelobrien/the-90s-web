export default function randomSiteList(idxStart: number) {
	const finalSitesList = []
	const siteList = [
		{ url: 'https://web.archive.org/web/19961220154510/https://www.yahoo.com/',	title: 'Yahoo!'	},
		{ url: 'https://web.archive.org/web/19981111183552/http://google.stanford.edu/', title: 'Google' },
		{ url: 'https://web.archive.org/web/20000402024054/http://www.cnn.com/', title: 'CNN'},
		{ url: 'https://web.archive.org/web/19970222175712/http://www1.geocities.com/Area51/', title: 'Area 51 news (There\'s aliens here!)'},
		{ url:'https://web.archive.org/web/19971210232559/http://mars.sgi.com/default.html', title:'Mars!!!'},
	]
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