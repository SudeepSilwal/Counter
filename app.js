let number = 0;
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let reset = document.querySelector(".reset");
let num = document.querySelector(".num")

add.onclick = function(){
    number++;
    num.innerText = number;
}


subtract.onclick = function(){
    number--;
    num.innerText = number;
}


reset.onclick=function(){
    number=0
    num.innerText = number;
}