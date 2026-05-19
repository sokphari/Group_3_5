let array = [10,20,30,40,50,60,70,80,90,100]
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
//shift ushift push pop splice filter map find
console.log("Use function unshift to extra firs elememnt in array")
array.unshift(1) // build in function
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log("Use Function shift remove firs element")
array.shift() // build in function
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log("user Fucntion push")
array.push(1000)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
console.log("user Fucntion pop")
array.pop()
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

let filter = array.filter((x)=>{
    return x >=50;
})
console.log(filter)

let map = array.map((y)=>{
    return y * 10;
})
console.log(map)