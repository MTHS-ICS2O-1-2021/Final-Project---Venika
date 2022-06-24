// Copyright (c) 2022 Venika Sem All rights reserved
//
// Created by: Venika Sem
// Created on: Mar 2022
// This file contains the JS functions for cinephile.html

"use strict"

// movie links generator
var images = [
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585167321-51gzsEmoYlL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1591908704-51-nrjuaA1L.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585169537-41mazFVw6XL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1591909302-51VUrIj4bQL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585170366-51p4ICoyPPL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585170073-51l0gEDghbL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585167351-51MseeNTNjL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597856575-51WPYAZ8xqL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585169919-51SpKM4ELlL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1600705544-51FvTXXQBGL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597857016-51ytG2jPPoL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1600706003-41tGQSlsD2L.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605044448-51P8qfUrFL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585167707-517iJDAsVrL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621970661-51pEX-qQD3L._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605044093-51Ynkkg3IL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585169780-513EYy-zVcL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621971002-51i9mcBFq7L._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1597856663-51fVeFVY1uL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585170188-61XCm7GqfdL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585235437-51O3W2pKmfL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605044634-41kaXgZDiWL.jpg?crop=1xw:1xh;center,top&resize=768:*",
  "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1585235486-51au38ENbnL.jpg?crop=1xw:1xh;center,top&resize=768:*",
]

/**
 * This function generates random movie.
 */
function randImg() {
  var size = images.length
  var x = Math.floor(size * Math.random())
  document.getElementById("image").src = images[x]
}

randImg()
