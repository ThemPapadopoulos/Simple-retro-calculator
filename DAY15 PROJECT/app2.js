function dis(val){

document.getElementById("display").value += val

}

 function solve(){

let x = document.getElementById("display").value
let y = eval(x)
document.getElementById("display").value = y

}

function Clear(){
var x = document.getElementById("display");
x.value = "0";
if (x.innerHTML !== "0") {
      x.innerHTML = "0";
   
}
}
