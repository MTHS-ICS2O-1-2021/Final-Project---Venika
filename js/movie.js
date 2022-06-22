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
  const firstQuestion = document.getElementById("firstQuestion")
  const secondQuestion = document.getElementById("secondQuestion")
  const thirdQuestion = document.getElementById("thirdQuestion")
  const fourthQuestion = document.getElementById("fourthQuestion")
  const fifthQuestion = document.getElementById("fifthQuestion")

  // input question 2
  const firstQuestion2 = document.getElementById("firstQuestion2")
  const secondQuestion2 = document.getElementById("secondQuestion2")
  const thirdQuestion2 = document.getElementById("thirdQuestion2")
  const fourthQuestion2 = document.getElementById("fourthQuestion2")

  // input question 3
  const firstQuestion3 = document.getElementById("firstQuestion3")
  const secondQuestion3 = document.getElementById("secondQuestion3")
  const thirdQuestion3 = document.getElementById("thirdQuestion3")
  const fourthQuestion3 = document.getElementById("fourthQuestion3")

  // output
  if (
    firstQuestion.checked == true &&
    firstQuestion2.checked == true &&
    firstQuestion3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./action.html"
  }

  if (
    secondQuestion.checked == true &&
    secondQuestion2.checked == true &&
    secondQuestion3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./romance.html"
  }

  if (
    fourthQuestion.checked == true &&
    fourthQuestion2.checked == true &&
    thirdQuestion3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./comedy.html"
  }

  if (
    thirdQuestion.checked == true &&
    thirdQuestion2.checked == true &&
    thirdQuestion3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./family.html"
  }

  if (
    fifthQuestion.checked == true &&
    firstQuestion2.checked == true &&
    fourthQuestion3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./fantasy.html"
  }
}
