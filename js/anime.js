// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for anime.html

"use strict"

// movie links generator
var images = [
  "https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
  "https://cdn.anime-planet.com/anime/primary/naruto-shippuden-1.jpg?t=1625766494",
  "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTNmZDE2NDEtNTg3MS00OTE1LThlZGUtOGZkZTg0NTUyNGVmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTk1NTc0MTYtY2IyNC00OWVjLWJhYWItNDQ0ODdiNWZkYTA5XkEyXkFqcGdeQXVyMTQ3MjMyMTYz._V1_FMjpg_UX1000_.jpg",
  "https://kbimages1-a.akamaihd.net/33a655d1-c557-4693-a892-a38ff6e43ef0/1200/1200/False/food-wars-shokugeki-no-soma-vol-33.jpg",
  "https://m.media-amazon.com/images/M/MV5BNzQ1MmJjZDUtMmI5OC00ZDk2LThkODQtODgwYmU0MTIzNDhmXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/I/616MN6sRu3L.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/220px-Bleachanime.png",
  "https://m.media-amazon.com/images/M/MV5BYzI0OWJlMjItYmE1NS00YzE2LWExNDAtMDM3MDA5MzM5NmExXkEyXkFqcGdeQXVyNzA5MDUyODA@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg",
]

/**
 * This function generates random animes.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
