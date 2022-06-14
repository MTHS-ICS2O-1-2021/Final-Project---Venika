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
 * This function gets users random movie
 */
function buttonClicked() {
