import React, {useState, useEffect} from 'react';
import './App.scss';
import PhotoCard from './components/PhotoCard'
import axiosConfig from './helpers/axiosConfig'
import { ReactComponent as SearchIcon } from './svgs/searchIcon.svg';


function App() {
  const [isPhotos, setIsPhotos] = useState([])
  const [error, setError] = useState('')
  // console.log(isSearch)

  useEffect(() => {
    axiosConfig.get('/photos/?client_id=ZgWulLlIrXIAFZBgRlOIV4mJBMBdNLtzyr5ymIsEUZs')
    .then(res => {
      setIsPhotos(res.data)
    },
    (error) => {
        setError(error)
    })
  }, [])

   function filterList (e){
    var updatedList = isPhotos.filter(item => {
      console.log(updatedList)
      return (
        item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    setIsPhotos(updatedList)
};


  if(error) {
    return <p className='center-loading'>Loading...</p>
  } else {

  }
  return (
    <div className="App">
      <div className="container">
        <div className="photo-section">
          <SearchIcon className="icon" />
          <input type="text"
          onChange={filterList}
           placeholder="search for photo" />
        </div>
      </div>
      <div className="image-list gallery-wrapper">
        {isPhotos.map((photo, id) => (
          <li key={id}>
            <PhotoCard
              image={photo.user.profile_image.large}
              name={photo.user.name}
              details={photo.user.location}
            />
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
