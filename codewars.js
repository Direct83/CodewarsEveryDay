const partlist = array => array.map((_, index)=>
	[array.slice(0, index).join(' '), array.slice(index).join(' ')]
).slice(1)

console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"])) //[["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]]
