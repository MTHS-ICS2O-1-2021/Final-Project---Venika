/* Created by: Venika Sem
 * Created on: June 2022
 * This file contains the JS functions for cartoon.html
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
  const firstAnswer = document.getElementById("firstAnswer")
  const secondAnswer = document.getElementById("secondAnswer")
  const thirdAnswer = document.getElementById("thirdAnswer")

  // input question 2
  const firstAnswer2 = document.getElementById("firstAnswer2")
  const secondAnswer2 = document.getElementById("secondAnswer2")
  const thirdAnswer2 = document.getElementById("thirdAnswer2")
  const fourthAnswer2 = document.getElementById("fourthAnswer2")

  // input question 3
  const firstAnswer3 = document.getElementById("firstAnswer3")
  const secondAnswer3 = document.getElementById("secondAnswer3")
  const thirdAnswer3 = document.getElementById("thirdAnswer3")
  const fourthAnswer3 = document.getElementById("fourthAnswer3")

  // output
  if (
    firstAnswer.checked == true &&
    firstAnswer2.checked == true &&
    firstAnswer3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./comics.html"
  } else if (
    secondAnswer.checked == true &&
    secondAnswer2.checked == true &&
    secondAnswer3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./anime.html"
  } else if (
    firstAnswer.checked == true &&
    thirdAnswer2.checked == true &&
    thirdAnswer3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./animated.html"
  } else if (
    firstAnswer.checked == true &&
    fourthAnswer2.checked == true &&
    fourthAnswer3.checked == true
  ) {
    document.getElementById("submit").innerHTML
    location.href = "./superhero.html"
  } else {
    document.getElementById("submit").innerHTML
    location.href = "./otaku.html"
  }
}
