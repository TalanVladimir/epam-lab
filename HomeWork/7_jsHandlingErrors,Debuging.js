// https://epam.sharepoint.com/sites/LMSO/Program/31849cdc1c07-cd93-67be-b3cf-d3f728e3cbea/Handling%20errors,%20Debuging.pdf

// Handling	errors,	Debuging
// 1.	Create	your	custom	error and	trigger	it.
// 2.	Choose	3	EPAM	sites	and	analyze	it	using	DevTools	console:
// • Do	they	have	memory	leaks?
// • What	functions	are	taking	more	time	for	execution?
// • What	time	does	it	take	for	rendering	first	meaningful	page?

// Task 1

const errorFunction = () => {
  throw 1; // make error
};

errorFunction('Vladimir', 'Talan');

// Task 2

// a)
// https://www.epam.com/
// https://learn.epam.com/start
// https://password.epam.com/

// b) query, fetch data
// collect / graphgl

// c) about ~700 ms
