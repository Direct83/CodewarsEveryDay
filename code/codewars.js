const splitInParts = (string, partLength) =>
	string
		.match(new RegExp(`.{${partLength}}|.*`, 'g'))
		.join(' ')
		.trim();

console.log(
	splitInParts(
		'ehzqsxcwoufblzajpxyzljasisozjnzelytqelqbbnspynxtthwjqknjiyojiuanlhdbgczugaxvunsdvbkxdudflfqdtmgljucnopgcdkvfaflescrgsmhcszmexeepymidenvwqcczlicotkymgrlgnurjrnslejblddffnlxzwhhrlqhjwmvzvtdfkxlcalyhasvmqsfpfkxcblzsqomjpjsljkdzlexxaxvoacgolglzdmgjudehsxeqlrjxzcnwauikudpasdnznrlecmgsgrhqrniajdqaomd',
		9
	)
);
