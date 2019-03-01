// using ==
// type conversion is performed
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

alert( true == 1 ); // true
alert( false == 0 ); // true

// using ===
// type conversion is not done
alert( 0 === false ); // false, because the types are different
alert( null === undefined ); // false
alert( null == undefined ); // true

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true