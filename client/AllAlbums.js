import React from 'react';

const AllAlbums = ({ albums, selectAlbumFunc }) => {
  return (
    <div id="albums" className="row wrap">
      <div className="album">
        {albums.map((album) => {
          return (
            <a key={album.id} onClick = {()=>{selectAlbumFunc(album.id)}}>
              <img src={album.artworkUrl} />
              <p>{album.name}</p>
              <small>{album.artist.name}</small>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AllAlbums;