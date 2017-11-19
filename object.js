
// Three ways of creating objects in JavaScript
var task = {
	title: 'Master Objects'
};
// var task = Object.create(Object.prototype);
// var task = new Object();


task.description = 'Watch videos and learn design patterns';

// Define a property using defineProperty. Pass in object, propertty and descriptor object
// value - value of the property
// writable - Can this property be edited in future? Remember this will not throw error when we try to change the value in future
// enumerable - Should this value be included while looping the properties of object?
// configurable - Can the configurations be edited in future?

Object.defineProperty(task, 'createdBy', {
	value: 'Sunil',
	writable: false,
	enumerable: false,
	configurable: true
});

task.print = function() {
	return this.title + ': ' + this.description;
}

Object.defineProperty(task, 'createdBy', {
	writable: true,
});

task.createdBy = 'Naveen';

console.log(Object.keys(task));
console.log(task);
console.log(task.createdBy);
console.log(task.print());


// We can create inheritance using Object.create()

var lowPriorityTask = Object.create(task);
lowPriorityTask.print = function() {
	return 'Low Priority Task is: ' + this.title + '- ' + this.description;
}

console.log(task.print());
console.log(lowPriorityTask.print());