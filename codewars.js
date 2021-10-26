const containAllRots = (str, arr) => [...str].reduce((acc, _, i) => {
	acc.push(str.slice(-i) + str.slice(0, -i))
	return acc
}, []).every(rot => arr.includes(rot))

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "jqbs", "sjqb", "twZNsslC", ]))
