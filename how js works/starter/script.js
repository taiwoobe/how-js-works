///////////////////////////////////////
// Lecture: Hoisting


// Hoisting with function declaration works perfect and the result is correct. 
calculateAge(1967);

function calculateAge(year) {
    console.log(2016 - year);
}


// The below code wont run because hoisting in functions only works with function declaration and not function expressions.
// retirement(1976);

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }


// The first console log here gives us undefined which is expected.
// Age in line 26 is in the global context variable object 
// Console log in line 30 gives 65 because its in the context variable object of the local function scope
// console log in line 33 gives 24 as that is also in the global context object as declared in line 26
console.log(age);
var age = 24;

function foo() {
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


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


// Example to show the differece between execution stack and scope chain

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
    // console.log(a + b + c + d);
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword









