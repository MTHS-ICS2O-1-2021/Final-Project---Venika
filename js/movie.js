/* Created by: Venika Sem
 * Created on: June 2022
 * This file contains the JS functions for movie.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Final-Project---Venika/sw.js", {
    scope: "/Final-Project---Venika/",
  })
}

/**
 * This function calculates the pizzas total price
 */
 function buttonClicked() {
   // input question 1
   const firstQuestion = document.getElementById("firstQuestion").value
   const secondQuestion = document.getElementById("secondQuestion").value
   const thirdQuestion = document.getElementById("thirdQuestion").value
   const fourthQuestion = document.getElementById("fourthQuestion").value

   // input question 2
   const firstQuestion2 = document.getElementById("firstQuestion2").value
   const secondQuestion2 = document.getElementById("secondQuestion2").value
   const thirdQuestion2 = document.getElementById("thirdQuestion2").value
   const fourthQuestion2 = document.getElementById("fourthQuestion2").value

   // input question 3
   const firstQuestion3 = document.getElementById("firstQuestion3").value
   const secondQuestion3 = document.getElementById("secondQuestion3").value
   const thirdQuestion3 = document.getElementById("thirdQuestion3").value
   const fourthQuestion3 = document.getElementById("fourthQuestion3").value

   // input question 4
   const firstQuestion4 = document.getElementById("firstQuestion4").value
   const secondQuestion4 = document.getElementById("secondQuestion4").value
   const thirdQuestion4 = document.getElementById("thirdQuestion4").value
   const fourthQuestion4 = document.getElementById("fourthQuestion4").value

   // output
   if (
     firstQuestion == "firstQuestion" ||
     secondQuestion2 == "secondQuestion2" ||
     thirdQuestion3 == "thirdQuestion3" ||
     fourthQuestion4 == "fourthQuestion4"
   ) {
    document.getElementById("submit").innerHTML =
      "<h5>You should watch action movie</h5>"
   }
}
