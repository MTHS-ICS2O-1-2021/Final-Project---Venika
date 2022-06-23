// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for action.html

"use strict"

// movie links generator
var images = [
  "https://i.pinimg.com/originals/6e/e3/68/6ee368fb71e49bda6cf1019a4eebf00a.jpg",
  "https://external-preview.redd.it/RsBk-jCROKvdN5at1L3ofUHLW7NsVfTkvlxWk50RNH8.jpg?width=640&crop=smart&auto=webp&s=7a5ce0ba332eb14c0d173cef57a1343cbd831ceb",
  "https://images.squarespace-cdn.com/content/v1/5aca32bf5b409b3ac7b1e7d8/1572534294309-FLFYV2F3U79VN789XYE6/rambo+first+blood+movie+poster.png",
  "https://mir-s3-cdn-cf.behance.net/project_modules/disp/d2811b8107979.560b751956e4c.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
  "https://i.pinimg.com/originals/81/1c/96/811c962100bce08f35cb8901f0bf0677.jpg",
  "https://www.thepoke.co.uk/wp-content/uploads/2013/09/BT6c4dSIMAAnLU3.jpg",
  "http://content8.flixster.com/rtmovie/87/14/87146_gal.jpg",
  "https://pics.filmaffinity.com/Iron_Man-108960873-large.jpg",
  "https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg",
  "https://www.mobygames.com/images/covers/l/147400-the-matrix-online-windows-front-cover.jpg",
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
