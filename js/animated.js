// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for animated.html

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
]

/**
 * This function generates random animated cartoons.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
