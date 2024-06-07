const verificar = document.querySelector("#verificar");

verificar.addEventListener("click",()=>{
 
let input1 = document.querySelector(".input1").value;
let input2 = document.querySelector(".input2").value;
let input3 = document.querySelector(".input3").value;

input1 = Number (input1)
input2 = Number (input2)
input3 = Number (input3)

let suma = input1 + input2 + input3;

if (suma <= 10) {
    document.querySelector("p").innerHTML = `Llevas ${suma} stikers en total`;
    
}else{
    document.querySelector("h3").innerHTML =  "No puedes llevar esta cantidad de stikers";
}

})