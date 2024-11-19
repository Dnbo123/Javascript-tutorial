import formatCurrency from "../../scripts/utilities/money.js";


//FormatCurrency test 

//Grouping the tests
console.log('Test suite: FormatCurrency');
//(1) Basic test cases

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}


//(2) Edge test Cases
if(formatCurrency(0) === '0.00') {
     console.log('Yeah');
} else {
    console.log('Nope');
}

if(formatCurrency(2000.5) === '20.01') {
    console.log('Yeah');
} else {
   console.log('Nope');
}

if(formatCurrency(2000.4) === '20.00') {
    console.log('Yeah');
} else {
   console.log('Nope');
}