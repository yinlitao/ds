var names = ["David", "cynthia", "Raymond", "Clayton", "Mikde", "Jennifer"];

var namestr = names.join('-');

console.log(namestr);

namestr = names.toString();

console.log(namestr);

var names2 = ["litao", "lixin", "lixia"];

var newNames = names.concat(names2);


console.log(newNames);

console.log(newNames.toString());


var spliceArray = newNames.splice(3,3);

console.log(spliceArray);


var newSpa = newNames.splice();

console.log(newSpa);

