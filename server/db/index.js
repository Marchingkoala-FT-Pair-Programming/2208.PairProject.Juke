const db = require('./db')
const Song = require('./song')
const Album = require('./album')
const Artist = require('./artist')
// require each of your models here...

// ...and give them some nice associations here!

Song.belongsTo(Album)
Album.hasMany(Song)

Song.belongsTo(Artist)
Artist.hasMany(Song)

Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = {
  db, Song, Album, Artist
}
