"use strict";

function addItem() {

//define variables
//by using .checked my objects are either true or false.
//have to have the same input name to only select 1 of the 2
  let fruit = document.getElementById("fruitInput").checked;
  let veggie = document.getElementById("veggieInput").checked;
  let food = document.getElementById("name").value;



  if (fruit === true) {
    let list = document.createElement("LI");
    let typeOfFood = document.createTextNode(`${food}`);
    list.appendChild(typeOfFood);
    document.getElementById("fruit").appendChild(list);
  } else if (veggie === true){
    let list = document.createElement("LI");
    let typeOfFood = document.createTextNode(`${food}`);
    list.appendChild(typeOfFood);
    document.getElementById("veggies").appendChild(list);
  }

}
