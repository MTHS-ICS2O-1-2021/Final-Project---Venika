// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for okatu.html

"use strict"

// movie links generator
var images = [
  "https://lumiere-a.akamaihd.net/v1/images/p_toystory4_19639_917ad716.jpeg",
  "https://i.ebayimg.com/images/g/XXYAAOSwAPVZGk~k/s-l400.jpg",
  "https://static.filmvandaag.nl/shows/original/0/315.jpg?width=400",
  "https://lumiere-a.akamaihd.net/v1/images/p_ladyandthetramp_19879_a178c3df.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_tangled_20509_cd0a5809.jpeg?region=0%2C0%2C540%2C810",
  "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2020/09/mulan-598495111d425.jpg?resize=361%2C514&ssl=1",
  "https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_luca_21670_3c13c611.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_onward_19732_09862641.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_frozen2_19644_4c4b423d.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/image_94f89ec1.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/image_8eba0e1a.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_bambi_19754_990e0e5a.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_bolt_19881_2a6c5fc2.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_cars2_19643_ebb2d07a.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg",
  "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg",
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
  "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/11/Detective-Comics-993.jpg?fit=1988%2C3056&quality=80&strip=info&ssl=1",
  "https://i.annihil.us/u/prod/marvel/i/mg/4/e0/4bb6eef0eab3d/portrait_uncanny.jpg",
  "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/11/Batgirl-29.jpg?fit=1988%2C3056&quality=80&strip=info&ssl=1",
  "https://i.annihil.us/u/prod/marvel/i/mg/c/70/5bf477aead255/clean.jpg",
  "https://flxt.tmsimg.com/assets/p12656123_b_v8_bf.jpg",
  "https://image.tmdb.org/t/p/w500/rmTNHzI0Joc4irx3nkFMWsYWp5c.jpg",
  "https://kbimages1-a.akamaihd.net/234cd54f-79dc-4a12-8ae5-b1916e99086d/353/569/90/False/rick-morty-3.jpg",
  "https://resizing.flixster.com/p4bNRltTA96oMxss5CJVBj0YvSU=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjIwNDEwMy53ZWJw",
  "https://m.media-amazon.com/images/I/81pLpq93KwL._AC_SL1500_.jpg",
]

/**
 * This function generates random cartoons.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
