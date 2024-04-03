let obj = {
    subject : 'math',
    marks : 200,
}

// <!--  using destructuring assignment -->
// let{subject,marks} = obj;
// console.log('subject:',subject,'&&','marks:',marks);



let{subject,marks,time = '10:30 am'} = obj; // <-- default

console.log('subject:',subject);
console.log('marks:',marks);
console.log('time:',time);

// arrow function

let add = (a,b) =>{
    return a+b;
}

let endResult = add(4,5);
console.log('end result of addition is',endResult);

// single parameter function

let check = a=>{
    if (a%2===0) {
        return ' a is even'
    }else{
        return ' it is not even'
    }
}

let result = check(6);
console.log('result is ',result);

// hoisting

console.log('variable brfore declaration ', test);
var test ='test match';

//  function hoisting 

display();

function display(){
    console.log('this is the output from the function');
    }

//  block scope ,global scope ,function scope 

//   block scope 

for (var i=0;i<=34;i++){
    var book= 'programming ';
    let  color='red';
    console.log('inside loop:',book,color);
}

// let is a  block  level scoped variable 

console.log('outside loop:',book);

//  

function nul() {
    let a = 'abc';
    var aVar ='a var';
    function sub() {
        let b = 'b c d';
        console.log('inside sub function :',a,aVar,b);
        function div() {
            console.log('inside div function :',a,aVar,b);
        }div()
    }sub()
}



nul();

// default parameter

let dheraiAdd = (a =1,b=2,c=3,d=4)=>{
    return a+b+c+d;
}

let  sum =dheraiAdd();
console.log('sum of the four numbers are:',sum);

//  rest parameter 

let thoraiAdd =(a,...b)=>{
    console.log('value of a :',a);
    console.log('value of b:',b);
}

thoraiAdd(56,'how','are','you');

