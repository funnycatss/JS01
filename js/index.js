//alert('Hello World!');
console.log('Hello world!');

var helloWorld = 'Hello world!';



const userName =prompt('Enter your name');


prn(helloWorld+'<br>'+ userName);

//Data types

const num = 42; //Number, Infinity, Nan
const str='<p>Some text</p>'; //String
const  bool=true; // Boolen-true/false
const undef=undefined;//undefined
const n= null; //null
const odj={}; //Object
const sym=Symbol(); //Symbol

let age = Number(prompt('Your age'));
prn('You are:' +checkAge(age));
age = age+1;
prn('<br>Next year you will be:'+nextage);


function prn(val){
document.write('<br>'+ val);
}

// > < >= <= ! == ===
function checkAge(age) {
    if( (age >=18) && (age<=60)){
        return 'Adult';
} else if (age>18) {
    return 'Child';
}
return'Old';
}
Math.sqrt()

const a = Number(prompt('Input A'));
const a = Number(prompt('Input B'));
const a = Number(prompt('Input C'));

function solveQuader(a,b,c)