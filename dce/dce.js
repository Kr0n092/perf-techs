function foo() {
    var x = 10;
    var y = 5;          /* Not used in scope */
    return bar(x);      /* Replace variable with value */
}

function bar(x) {
    var y = x * 20;
    var z = 30;         /* Not used in scope */
    return baz(y);      /* Replace variable with value */
}

function baz(y) {
    return y / 10;      /* Replace variable with value */
}

console.log(foo());

function foo() {
    return bar(10);
}

function bar(x) {
    return baz(x*20);   /* Replace variable with value */
}

function baz(y) {
    return y /10;       /* Replace variable with value */
}

console.log(foo());

function foo() {
    return bar(10);     /* Replace with result */
}

function bar() {
    return baz(10*20);  /* Replace with result */
}

function baz() {
    return 10*20 / 10;
}

console.log(foo());     /* Replace with result */













console.log(20);
