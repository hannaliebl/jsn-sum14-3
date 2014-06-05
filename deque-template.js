//-------
// Part a): build a deque factory
function makeDeque(values) {
    var deque = { dequeValues: [] }
    for (i = 0; i < values.length; i++) {
            deque.dequeValues[i] = values[i];
        }
    deque.top = makeDeque.top;
    deque.bottom = makeDeque.bottom;
    deque.pop = makeDeque.pop;
    deque.push = makeDeque.push;
    deque.shift = makeDeque.shift;
    deque.unshift = makeDeque.unshift;
    deque.cut = makeDeque.cut;
    deque.map = makeDeque.map;
    deque.sort = makeDeque.sort;
    return deque;
};

makeDeque.top = function() {
	return this.dequeValues[this.dequeValues.length -1];
};
makeDeque.bottom = function() {
	return this.dequeValues[0];
};

makeDeque.pop = function() {
	return this.dequeValues.pop();
};
makeDeque.push = function(val) {
	return this.dequeValues.push(val);
};

makeDeque.shift = function() {
	return this.dequeValues.shift();
};
makeDeque.unshift = function(val) {
	return this.dequeValues.unshift(val);
};
makeDeque.cut = function(offset) {
	
};

makeDeque.map = function(convertValFn) {
	//...
};

makeDeque.sort = function(compareValsFn) {
	//...
};

//sanity checking
var d2 = makeDeque([1,2,3])
d2.top();
d2.bottom();
d2.pop();

var someCards = /* make array of 52 card objects here, using your code from Problem 1) */;
// At this point, data looks like Fig.1

//-------
// Part b): build a deque instance:
var deckOfCards = makeDeque(someCards);
// sort it:
deckOfCards.sort(/* something here */);
// At this point, data looks like Fig.2

// sort it differently:
deckOfCards.sort(/* something different here */);

//-------
// Part c): build another deque instance:
var someNames = /* make array of student/TA names here */;
var deckOfNames = makeDeque(someNames);
deckOfNames.sort(/* something here */);