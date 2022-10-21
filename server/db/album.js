const Sequelize = require('sequelize')
const db = require('./db')

const Album = db.define("album", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  artworkUrl: {
    type: Sequelize.STRING,
    isin: ["default=album.jpg"],
  },
});

module.exports = Album