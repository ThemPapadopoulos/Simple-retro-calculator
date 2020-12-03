
function clickFunction7() {
      var x = document.getElementById("display");
      if (x.innerHTML === "0") {
        x.innerHTML = "7";
      } else {
        x.innerHTML += "7";
      }
    }

function clickFunctionClear() {
      var x = document.getElementById("display");
      if (x.innerHTML !== "0") {
        x.innerHTML = "0";

    }
}

function clickFunctionAdd() {
      var x = document.getElementById("display");
      if (x.innerHTML !== "0") {
        x.innerHTML += "+";

    }
}

function clickFunctionMinus() {
      var x = document.getElementById("display");
      if (x.innerHTML !== "0") {
        x.innerHTML += "-";
    }
}

function clickFunctionMulti() {
      var x = document.getElementById("display");
      if (x.innerHTML !== "0") {
        x.innerHTML += "*";
    }
}

function clickFunctionDiv() {
      var x = document.getElementById("display");
      if (x.innerHTML !== "0") {
        x.innerHTML += "/";
    }
}

function clickFunctionDot() {
      var x = document.getElementById("display");
      if (x.innerHTML == "0") {
        x.innerHTML += ".";
    }
    else {
      x.innerHTML += ".";
    }

}

function clickFunctionResult() {
      var x = document.getElementById("display");
      if (x.innerHTML !== "0") {
        x.innerHTML = ["=",];
    }
    return result;
    

}

