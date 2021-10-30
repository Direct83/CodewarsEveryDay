function mygcd(x,y){
	if (y > x) return mygcd(y, x);
	if (!y) return x;
	return mygcd(y, x % y);
}

console.log(mygcd(30,12)) // 6
