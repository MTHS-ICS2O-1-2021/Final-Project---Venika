// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for superhero.html

"use strict"

// movie links generator
var images = [
  "https://www.dccomics.com/sites/default/files/imce/2022/06-JUN/YJTARGETS_Cv1_DIGITALFIRST_62a7ef44ea5892.15877388.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/p_theavengers_earthsmightiestheroes_21234_abee22a0.jpeg",
  "https://m.media-amazon.com/images/I/51wU2LIwLAL._AC_SY445_.jpg",
  "https://m.media-amazon.com/images/I/81Q8MduG3qL._AC_SL1500_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/2/22/Guardians_of_the_Galaxy_game_cover_art.jpg",
  "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABezkYOBgnZIVDPy_y50AKY4MGsLGBTpI0jAl9tlbAVF6f98TqyrgmNy5q5ue1L9jmwDghoPvNN6xll3E0K-53dbFnGRU.jpg",
  "https://i.pinimg.com/550x/9a/40/da/9a40da266f31e46613122aa4f4126cc9.jpg",
  "https://occ-0-299-300.1.nflxso.net/art/bc395/9a6b029c223be3a5f23395e3b4ae86d2005bc395.jpg",
  "https://m.media-amazon.com/images/I/913uBOAZVnL._SL1500_.jpg",
]

/**
 * This function generates random superhero cartoons.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
