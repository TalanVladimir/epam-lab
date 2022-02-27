// Scope,	Hoisting,	Closures

// 1.	Create	a	function	runningAverage()	that	returns	a	callable	function	object.	Update	the
// series	with	each	given	value	and	calculate	the	current	average.
// rAvg	=	runningAverage();
// rAvg(10)	=	10.0;
// rAvg(11)	=	10.5;
// rAvg(12)	=	11;

const runningAverage = () => {
  const arrayNumbers = [];
  return number => {
    arrayNumbers.push(number);
    return arrayNumbers.reduce((a, b) => a + b, 0) / arrayNumbers.length;
  };
};

const rAvg = runningAverage();
console.log(rAvg(10));
console.log(rAvg(5));
console.log(rAvg(10));

// 2.	Write	a	sum	function	which	will	work	properly	when	invoked	using	syntax	below.
// sum(2,3);		//	Outputs	5
// sum(2)(3);	//	Outputs	5
// sum(1)(2)(3)(4);	//	Outputs	10

const sum = (...n) => {
  const currentSum = n.reduce((a, b) => a + b, 0);
  const number = (...x) => {
    const newNumber = x.reduce((a, b) => a + b, 0);
    return sum(currentSum + newNumber);
  };
  number.valueOf = () => currentSum;
  return number;
};

// console.log(+sum(1, 2, 4, 1));
// console.log(+sum(1, 2, 4, 1)(1, 2, 4, 1)(1, 2, 4, 1));
console.log(+sum(1, 2, 3)(1, 2, 3)(1, 2, 3)(1, 2, 3));
// console.log(+sum(1)(2)(3)(4));
