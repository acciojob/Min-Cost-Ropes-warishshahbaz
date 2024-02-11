function mincost(arr)
{ 
	let pq = [];
	 for (let i = 0; i < arr.length; i++) {
	 	pq.push(arr[i]);
	 }
	pq.sort((a,b)=> b-a);
	let res = 0;
	while (pq.length >1) {
		let first = pq.shift();
		let sec = pq.shift();
		res += first + sec ;
		pq.push(first + sec);
		pq.sort((a,b)=>b-a);
	}
	return res;
//write your code here
// return the min cost
  
}

module.exports=mincost;
