// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for family.html

"use strict"

// movie links generator
var images = [
  "https://www.thedatingdivas.com/wp-content/uploads/2020/11/511VNY7OhL.jpg",
  "https://m.media-amazon.com/images/I/51firUilqIL.jpg",
  "https://musicart.xboxlive.com/7/e37a1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  "https://m.media-amazon.com/images/M/MV5BOTgxMDMxMTY5OV5BMl5BanBnXkFtZTgwMjY1NzYzMjE@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTUxMTEzODYxMV5BMl5BanBnXkFtZTcwNzQ4ODU0MQ@@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BYTYxZGU0OTAtN2QzZS00ZDU0LWI2MmItMTU1NzE5Zjk4NzI3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6175/6175128_so.jpg",
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1000/1000006_so.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTMxMGM5MjItNDJhNy00MWI2LWJlZWMtOWFhMjI5ZTQwMWM3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
  "https://i.pinimg.com/originals/6d/90/59/6d9059d1c6eb429a1f5ae508575952f9.jpg",
]

/**
 * This function generates random family movie.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
