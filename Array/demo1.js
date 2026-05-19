
// let  = ["apple","fruit","banana","apple",
//     "fruit","banana","apple","fruit","banana1",
//     "apple","fruit","banana","apple",
//     "fruit","banana","apple","fruit","banana2"] 
//console.log(array)
//console.log(array[0]) //output value firs element

// for(let i = 0; i < array.length; i++){ // i = 1 + 1 = i
//     console.log(array[i])
// }

// apple
// fruit
// banana

// array1.forEach((value,index)=>{
//     console.log(value)
// })



// array 2D
// let arr2D = [
//     ["rathak","seyha","david"],
//     ["Khea","lina","somnang"],
//     ["Panha","Dalin","Saravuth"],
//     ["vannak","N-Jonh","Dr Strange"]
// ];

// for(let i = 0; i < arr2D.length; i++){
//     for(let j = 0; j < arr2D[i].length; j++){
//         console.log(arr2D[i][j])
//     }
// }

//console.log(arr2D[2][3]) // vote 5
// console.log(arr2D[1][2]) // vote 5 
// console.log(arr2D[2][2])
// console.log(arr2D[2][1])
// console.log(arr2D[2][0])
// console.log(arr2D[3][0])
// console.log(arr2D[1][1])
// console.log(arr2D[1][0])
// console.log(arr2D[0][0])
// console.log(arr2D[0][1])
// console.log(arr2D[0][2])



// 1. product : laptop , price : 599 , stock : 20 , Model : Asus
// 2. product : laptop , price : 799 , stock : 10 , Model : Msi
// 3. product : laptop , price : 1299 , stock : 50 , Model : rog

// const product = [
//     ["Laptop",599,20,"Asus"]
// ]

// console.log("product : " + array[][] + " Price : " + array[][]
//  + "stock : " + array[][] + "Model : "+array[][])

// syntax:

// let array = [
//     {
//         key : value
//     }
// ]
// let array = [
//     [],
//     []
// ]

let ass = [

    { 
      id:1,
      name:"rathak",
      gender:"female",
      phone:"0987654"
    },
    { 
      id:2,
      name:"dalin",
      gender:"female",
      phone:"0987654"
    },
    { 
      id:3,
      name:"somnang",
      gender:"male",
      phone:"0987654"
    },
]
console.log(ass[0].id + ass[0].name + ass[0].gender + ass[0].phone)
for(let i = 0; i < ass.length; i++){
    console.log(ass[i].id)
    console.log(ass[i].name)
    console.log(ass[i].gender)
    console.log(ass[i].phone)
}
// ass.map((val,index)=>{
//     console.log(val.id)
// })
