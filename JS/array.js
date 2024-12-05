//  Array ->   stores collection of any data type
const userData = [
    {
        name:"Akash",
        address:{
            village:"Delhi",
            City:"UK"
        }
    },
    {
        name:"Vikash",
        address:{
            village:"KL",
            City:"new"
        }
    },
    {
        name:"Ram Lan",
        address:{
            village:"LKO",
            City:"LKO"
        }
    }
]
//  map function: irritate over the array (each and every element
console.log(userData.map((ele)=>ele.address.City))