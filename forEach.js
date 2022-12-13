const arr = ['girrafe','tiger','lion'];
const arr2 = [1,2,3,4];

function PUSH(){
    arr.push('cheetah');
}

PUSH();
arr.forEach(element=>{
    console.log(element);
});

arr2.forEach(element=>{
    console.log(element);
});

const fruits = ['banana','orange'];
fruits.unshift('apple');
fruits.forEach(element=>{
    console.log(element);
});