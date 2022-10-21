import React, { useEffect, useState } from 'react';
import AllAlbums from './AllAlbums';
import Sidebar from './Sidebar';
import Player from './Player';
import SingleAlbum from './SingleAlbum';


const App = () => {

  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState({})

  const fetchingAlbumData = async () =>{
    const albumData = await fetch("/api/albums");
    const json = await albumData.json()
    setAlbums(json)
  }

  const selectAlbumFunc = async (albumId) => {
    const singleAlbum = await fetch(`/api/albums/${albumId}`);
    const json = await singleAlbum.json();
    setSelectedAlbum(json[0]);
    console.log(json[0])
  };

  useEffect(()=>{
    fetchingAlbumData();
  }, [])

  

  return (
    <div>
      <div id="app">
        <div id="main" className="row container">
          {/* <!-- Sidebar --> */}
          <Sidebar />

          <div className="container">
            {/* <!-- All Albums --> */}
            {selectedAlbum.id ? (
              <SingleAlbum selectedAlbum={selectedAlbum} />
            ) : (
              <AllAlbums albums={albums} selectAlbumFunc={selectAlbumFunc} />
            )}
          </div>

          {/* <!-- Player --> */}
          <Player />
        </div>
      </div>
    </div>
  );
};

export default App;