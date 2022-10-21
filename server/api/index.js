const router = require('express').Router()
const { Artist, Album, Song} = require('../db')
// connect your API routes here!

router.get('/albums', async (req,res)=>{
    const artistAndAlbum = await Album.findAll({
        include: [Artist]
    })
    // console.log(artistAndAlbum)
    res.send(artistAndAlbum)
})

router.get('/albums/:albumId', async(req,res)=>{
    const realId = req.params.albumId
    const singleAlbum = await Album.findAll({
        include: [Artist, Song],
        where: {
            id: +realId
        }
    })
    res.send(singleAlbum)
})
module.exports = router
