console.log(spotifyPlays);
const songPopularities = [];
spotifyPlays.forEach(function(play) {
    console.log(play)
    songPopularities.push(play.popularity);
});

console.log(songPopularities)

const songPopularitiesMapped = spotifyPlays.map(play => play.popularity);
const songTitleMapped = spotifyPlays.map(play => play.song);

console.log(songPopularitiesMapped)
console.log(songTitleMapped)

