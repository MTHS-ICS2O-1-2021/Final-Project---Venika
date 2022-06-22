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
 * This function gives user movie type recommendation
 */
function myButtonClicked() {
  // input question 1
  const firstQuestion = document.getElementById("firstQuestion").value
  const secondQuestion = document.getElementById("secondQuestion").value
  const thirdQuestion = document.getElementById("thirdQuestion").value
  const fourthQuestion = document.getElementById("fourthQuestion").value
  const fifthQuestion = document.getElementById("fifthQuestion").value

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

  // output
  if (
    firstQuestion == "firstQuestion" &&
    firstQuestion2 == "firstQuestion2" &&
    firstQuestion3 == "firstQuestion3"
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./action.html"
  } else if (
    secondQuestion == "secondQuestion" &&
    secondQuestion2 == "secondQuestion2" &&
    secondQuestion3 == "secondQuestion3"
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./romance.html"
  } else if (
    fourthQuestion == "fourthQuestion" &&
    fourthQuestion2 == "fourthQuestion2" &&
    thirdQuestion3 == "thirdQuestion3"
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./comedy.html"
  }
}
