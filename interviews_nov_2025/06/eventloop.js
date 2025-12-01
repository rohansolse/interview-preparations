console.log(1);
setTimeout(()=> {
    console.log(2);
},100)

console.log(3);
setTimeout(()=> {
    console.log(4);
},10)

console.log(5);
setTimeout(()=> {
    console.log(6);
}) //CONFUSED

for(var i=0; i<1000; i++) {
    if(i===999) {
        console.log(7);
    }
}

setTimeout(()=> {
    console.log(8);
},0)
