'use strict';
// let rows=[1,2,3]
// rows.push(6)
// console.log(rows.length-1,rows);
// // let popped=rows.pop();
// // console.log(popped);
//  rows.push("hello")
// console.log(rows);
// let popped=rows.pop();
// console.log(popped);
// let x=10;
// {
//     let x=20;
//     console.log(x);
//     }
// console.log(x);
// let age = prompt('How old are you?', 100);
let userOne=prompt("enter choice:")
let userTwo=prompt("enter choice:" )
console.log(userOne,userTwo);
if(userOne===userTwo){
    console.log('tie');
}
// if(userOne!=='rock' || userOne!=='paper' || userOne!=='scissors' || userTwo!=='rock' || userTwo!=='paper' || userTwo!=='scissors'){
//     console.log('invalid input:');
// }
else if(userOne=='rock' && userTwo=='paper' || userOne=='paper' && userTwo=='rock'){
if(userOne=='rock' && userTwo=='paper'){
console.log(' usertwo won');
}
else if(userTwo=='rock' && userOne=='paper'){
    // console.log(userOne,'won');
console.log('userone won');
}
    // console.log(userTwo,"Won");
}
else if(userOne=='scissors' && userTwo=='rock' || userOne=='rock' && userTwo=='scissors'){
    if(userOne=='scissors' && userTwo=='rock'){
        console.log(' usertwo won');
        }
        else if(userTwo=='rock' && userOne=='scissors'){
            // console.log(userOne,'won');
        console.log('usertwo won');
        }
    // console.log('rock won');
}
else if(userOne=='scissors' && userTwo=='paper' || userOne=='paper' && userTwo=='scissors'){
    if(userOne=='scissors' && userTwo=='paper'){
        console.log(' userone won');
        }
        else if(userTwo=='scissors' && userOne=='paper'){
            // console.log(userOne,'won');
        console.log('usertwo won');
        }
    // console.log('Scissors won');
}
// else if(userOne=='rock' && userTwo=='paper' || userOne=='paper' && userTwo=='rock'){
// console.log( 'paper win rock loss');
// }
// else if(userOne=='paper' && userTwo=='Scissors' || userOne=='Scissors' && userTwo=='paper'){
//     console.log('Scissors win paper loss');
// }