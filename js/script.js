// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha. Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html

function calculatefahernheittocelsius() {
  // input

  const funits = parseFloat(document.getElementById("fahrenheit").value);

  let Celsius = (funits - 32)* (5/9)
  let comment = ("Thanks for using our service")
  
  document.getElementById('answer1').innerHTML = 
    `Celsius is ${Celsius.toFixed(2)} units <br>
    Comment: ${comment.toFixed(2)}`

}
