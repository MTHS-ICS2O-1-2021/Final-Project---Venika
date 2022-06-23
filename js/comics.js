// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for comics.html

"use strict"

// movie links generator
var images = [
  "https://i0.wp.com/www.comicon.com/wp-content/uploads/2022/06/WorldOfArchieJumboComicsDigest_120_Cover_Golliher.jpg?fit=891%2C1200&ssl=1",
  "https://images-na.ssl-images-amazon.com/images/I/91KmF+4al-L.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/91y6Bwz9vdL.jpg",
  "https://i.annihil.us/u/prod/marvel/i/mg/7/03/57ae211708557/portrait_uncanny.jpg",
  "https://www.previewsworld.com/SiteImage/MainImage/STL099340",
  "https://static.wikia.nocookie.net/marvel_dc/images/4/46/Justice_League_Vol_2_11.jpg/revision/latest?cb=20120719051021",
  "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/11/Detective-Comics-993.jpg?fit=1988%2C3056&quality=80&strip=info&ssl=1",
  "https://i.annihil.us/u/prod/marvel/i/mg/4/e0/4bb6eef0eab3d/portrait_uncanny.jpg",
  "https://i0.wp.com/batman-news.com/wp-content/uploads/2018/11/Batgirl-29.jpg?fit=1988%2C3056&quality=80&strip=info&ssl=1",
  "https://i.annihil.us/u/prod/marvel/i/mg/c/70/5bf477aead255/clean.jpg",
  "https://static.wikia.nocookie.net/marvel_dc/images/6/66/Suicide_Squad_0001.jpg/revision/latest?cb=20091029084904",
]

/**
 * This function generates random action movie.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
