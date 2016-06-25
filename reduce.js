var nums = [33, 23, 233, 44, 445,54];

function getSum(total, num){
	return total *  num;
}

var r = nums.reduce(getSum);

console.log(r);


