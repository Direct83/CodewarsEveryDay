Array.prototype.remove_ = function (integer_list, values_list) {
	return integer_list.filter((el) => !values_list.includes(el));
};

l = new Array();
console.log(l.remove_([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
