// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function generates random romance movie.
 */
var images = [
  "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
  "https://m.media-amazon.com/images/M/MV5BNzVmMjJlN2MtNWQ4Ny00Zjc2LWJjYTgtYjJiNGM5MTM1ZTlkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  "https://static.tvtropes.org/pmwiki/pub/images/tc8oka1.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTYyMjYxMjEzOF5BMl5BanBnXkFtZTgwMjAwNDE3NjM@._V1_.jpg",
  "https://images.saymedia-content.com/.image/t_share/MTc0NDQwMzc2OTczNjY1NjQw/film-review-beauty-and-the-beast-2017.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTk3ZTEzNGUtZTcwYy00NmRmLWFhMGYtZjA4NWY1ZWI4MzMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
  "https://www.girl.com.au/img/bigarticles/ghostsgirlfriends.jpg",
  "https://culturexchange1.files.wordpress.com/2016/12/open-uri20150422-12561-ms34bn_c52bad8d.jpeg",
  "https://i2.wp.com/funmoneymom.com/wp-content/uploads/2021/08/Aladdin-Movie-Poster-2-1.jpg",
  "https://m.media-amazon.com/images/M/MV5BNWE1NmMzNjUtMDc3NS00ZjBlLTllMTktZTVkMWQzZGVlYzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/da/Leap_year_poster.jpg",
]

function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
