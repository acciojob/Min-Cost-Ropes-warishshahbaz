function mincost(arr)
{ 
	let pq = arr;
	
	pq.sort((a,b)=> b-a);
	let minimum_cost = 0;
	while (pq.length >1) {
		let first = pq.shift();
		let sec = pq.shift();
		minimum_cost += first + sec ;
		pq.push(first + sec);
		pq.sort((a,b)=>b-a);
	}
	return minimum_cost;

  
}

module.exports=mincost;
