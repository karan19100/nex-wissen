// console.log('-index.js-')
import 'bootstrap/dist/css/bootstrap.css';

// import './promise-api'
// import './promise-api-v2';

import './rxjs-learn-v1'

// import {} from './generator-func'

// #1

// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz();


// #2
// function foo(){ throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz();

// #3
// function foo(){
//     foo();
// }
// foo();


//#4

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log("long.....");  
//         i++;
//     }
// }

// function shortRunning(){
//     console.log('short...');  
// }

// longRunning();
// shortRunning();


//------------------------------------------------------

// on event, how browser executing function ?

//------------------------------------------------------


/*

    <button class="veg">veg-1</button>
    <button class="veg">veg-2</button>
    <button class="non-veg">non-veg</button>

*/

/*
console.log("init....");

//using DOM API
//---------------
$.on('.veg', 'click', function vegHandler(e) {
    console.log("handling event on .veg elements");
});
$.on('.non-veg', 'click', function nonVegHandler(e) {
    console.log("handling event on .non-veg elements");
});

console.log("cont..with other work..");

function longRunning() {
    var i = 0;
    while (i < 100) {
        console.log("long.....");
        i++;
    }
}
longRunning();
*/


//---------------------------------------
// Non Blocking IO
//---------------------------------------

/*

// in browser,
IO  means ==> http-request/response , read/write with storage API, ... interactions with browser APIs


// .js event-loop never blocked while IO happening thru browser APIs


console.log('init.....')
// n/w call ==> IO
setTimeout(function timeout() {
    console.log("consume IO result...");
}, 4000);
console.log(("cont..with other work.."));

*/


// //
// localStorage.setItem("SESSIONID","1234567800") // IO

// let id=localStorage.getItem('SESSIONID' ) // IO
// console.log(id);  



//---------------------------------------
// Quiz
//---------------------------------------


/*
function teach() {
    let tnrName = "Nag";  // will move this data to heap
    try {
        console.log(tnrName + "-teaching .js ");
        //throw new Error('hate .js')
        setTimeout(function () {
            console.log(tnrName + '-teaching NG')
            //throw new Error('hate NG')
            console.log('teaching NG ends..')
        }, 5000)
        console.log("teaching .js ends..");
    } catch (e) {
        console.log("i caught error : " + e.message);
    }
}

teach();
*/


