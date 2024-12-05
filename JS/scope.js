//  scope ka mtlb variables ko kaha se access kr skte ho  

//  global scope , functional scope and block scope
// const a = 10  
// case 1->  if any variable declare with var , let or const keyword outside of any function .  to vo variable global scope me hai 



// function globalScope(){

//     console.log(a)
// }
// globalScope()

// case2-> agr function ke andr declare chahe vo var , let or const keyword ke sath me ho  to vo functional scope me hoga


// function functionalScope(){
//     let myAge = 20
//     console.log(myAge)
// }


// functionalScope()

// case 3 -> agr function ke andr condition ya loop likha gya ho aur us block ke andr variable declare kiya gya hai to sirf usi ke andr access kr skte hai , sirf let and const


function blockScope(){

    var a = 10 
    if(a>8){
        let newAge = 30
console.log(newAge)
    }else{
        console.log("mza nhi aaya")
    }

}

blockScope()
//  var variables ko poore function ke andr khi bhi access kr skte ho but let and const ko sirf usi block{} ke andr access kroge jis block me unhe declare kiya gya hai
// var has functional scope , whereas let and const has block scope .