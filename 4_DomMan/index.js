//4 pillars of DOM
/* 
1.Selectiion of an element
2.Changing html
3.changing css
4.Event Listener
*/
//slect all element like h1,p etc
document.querySelector(`h1`)
//slect all id 
document.querySelector(`#idname`)
//slect all classs 
document.querySelector(`.class name`)
var a=document.querySelector(`h1`);
console.log(a)

//chang element
var ab=document.querySelector(`h1`);
ab.innerHTML=`chang my document object model`
console.log(ab);

//changing css
var abc=document.querySelector(`h1`);
abc.innerHTML=`chang my document object model`
abc.style.color=`red`
abc.style.backgroundColor=`gray`
console.log(abc);

//changing evenListern
var abcd=document.querySelector(`h1`);
abcd.innerHTML=`chang document object model`
abcd.style.color=`yellow`
abcd.style.backgroundColor=`blue`
abcd.addEventListener(`click`,function(){
    abcd.innerHTML=`chang using click event listerner`
    abcd.style.color=`blue`
    abcd.style.backgroundColor=`orange`
    console.log(`working your eventListener`)
})
console.log(abc);

//button chage blub
var bulb=document.querySelector(`.bulb`);
var btn=document.querySelector(`button`)
var flag=0;

btn.addEventListener(`click`,function(params) {
    if(flag==0){
      bulb.style.backgroundColor=`yellow`
      flag=1
    }else{
        bulb.style.backgroundColor=`white`
        flag=0
    }
    
})

//slecting multiple elemt single time
var h=document.querySelectorAll(`h2`)
h.forEach(function(e){
    console.log(e)
})




