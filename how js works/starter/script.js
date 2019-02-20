///////////////////////////////////////
// Lecture: Hoisting


// Hoisting with function declaration works perfect and the result is correct. 
calculateAge(1967);

function calculateAge(year) {
    console.log(2016 - year);
}


// The below code wont run because hoisting in functions only works with function declaration and not function expressions.
retirement(1976);

var retirement = function(year) {
    console.log(65 - (2016 - year));
}
















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









