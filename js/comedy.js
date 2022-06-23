// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for comedy.html

"use strict"

// movie links generator
var images = [
  "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/bridesmaids-movie-poster.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTZiYjEzY2UtMzA2OC00NjM1LWFlMjItMzg4MTAwOTU2YzYxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTMyY2Q2MDctMDFlMS00MWEzLTk1NmEtNDcxNzg1ZGJlNGU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BNDE5NjQzMDkzOF5BMl5BanBnXkFtZTcwODI3ODI3MQ@@._V1_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMmQ4NzE5ZDItMzFjYi00MTU5LTliYjAtYzRjZDI4ZjQ4NzY5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-28288-superbad-1800-1406643154.jpg?w=1024",
  "https://s.yimg.com/ny/api/res/1.2/TXUpaTJfzQC4xHe6ENMmuA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk0OA--/https://s.yimg.com/uu/api/res/1.2/De9o0U6ivf7g1v1WwqO8cw--~B/aD0xNDQwO3c9OTcyO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/digital_spy_281/cd90db734c01e5f1a65242dd05499b8f",
  "https://i.pinimg.com/originals/44/bd/0f/44bd0f871fb17f956703a5c2538d71bb.jpg",
  "https://trailers.apple.com/trailers/independent/once-i-was-engaged/images/poster_2x.jpg",
]

/**
 * This function generates random comedy movie.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
