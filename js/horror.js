var images = [
    "https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/bridesmaids-movie-poster.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/girl-on-third-floor-movie-poster-1624570439.jpg?crop=0.869xw:0.882xh;0.0476xw,0&resize=480:*",
    "https://i.pinimg.com/originals/44/bd/0f/44bd0f871fb17f956703a5c2538d71bb.jpg",
    "https://trailers.apple.com/trailers/independent/once-i-was-engaged/images/poster_2x.jpg"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
}

randImg();