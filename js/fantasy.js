// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for fantasy.html

"use strict"

// movie links generator
var images = [
  "https://resizing.flixster.com/VpH1vbj05ClcCftItvFXfjhYnYo=/405x600/v1.ZTsxMDI2NzQ3NjtqOzE5MjQ5OzIwNDg7NTA5Ozc1NQ",
  "https://movieswithaplottwist.com/wp-content/uploads/2019/10/Lady_in_the_water_movie_poster.jpg",
  "https://canvas-bridge02.tubitv.com/QOz_0gDXXtI2ZNuQ0LpIKcqYDSg=/400x574/smart/img.adrise.tv/43406743-408c-4021-8122-51f3e9e51bfc.jpg",
  "https://vignette.wikia.nocookie.net/harrypotter/images/2/2c/Goblet_of_Fire_Film_Poster.jpg/revision/latest/top-crop/width/360/height/450",
  "https://cdn.film-fish.com/uploads/movie/35ebf90a41e044b9de60a0eb1f0173e2.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
  "https://i.pinimg.com/736x/d5/70/6a/d5706aa00ee8fc2f8962e2408c0a98dd.jpg",
  "https://m.media-amazon.com/images/M/MV5BMjE3MDM4NTg0NV5BMl5BanBnXkFtZTcwNjI4MTczMw@@._V1_.jpg",
  "https://gdj-inr5u0ip5pewom.stackpathdns.com/wp-content/uploads/2012/03/movies-poster-21.jpg",
  "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY741_.jpg",
  "https://www.listchallenges.com/f/items2020/52c9f3b5-1660-4efb-9670-61999b3bd194.jpg",
]

/**
 * This function generates random fantasy movie.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
