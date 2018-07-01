// this binding, Assumption: scope
// 4 rules: (Likely based on test cases)
// How the function is called

function foo() {
  console.log(this);
}

//  1.0  (default)

// foo();

//  1.1

// 'use strict';

//  2 (implicit) 

// let o1 = {name:'o1', foo:foo};
// o2.foo();

//  3 (explicit)

// let o2 = {name:'o2', foo:foo};
// foo.call(o2);

// 3.1 

// let o2 = {name:'o2', foo:foo};
// foo = function() { foo.call(o2) }

// foo = foo.bind(o2);

// 4 (i empty object, ii linking, iii bound, iv implies return this)

// let o3 = new foo();

// 5(order of precedence)

// new, explicit, implicit, default

