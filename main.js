"use strict";

function addItem() {

  let fruit = document.getElementById("fruitInput").value;
  let veggie = document.getElementById("veggieInput").value;
  let food = document.getElementById("name").value;


  if (fruit === "fruit") {
    let x = document.createElement("LI");
    let t = document.createTextNode(`${food}`);
    x.appendChild(t);
    document.getElementById("fruit").appendChild(x);
  } else {
  let x = document.createElement("LI");
  let t = document.createTextNode(`${food}`);
  x.appendChild(t);
  document.getElementById("veggies").appendChild(x);
  }


}
