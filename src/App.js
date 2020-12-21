import React, {useState, useEffect} from 'react';
import './App.scss';
import PhotoCard from './components/PhotoCard'
import axiosConfig from './helpers/axiosConfig'
import { ReactComponent as SearchIcon } from './svgs/searchIcon.svg';
import GridLayoutLoader from './components/GridLayoutLoader'

function App() {
  const [isPhotos, setIsPhotos] = useState([])
  // eslint-disable-next-line
  const [error, setError] = useState('')
  const [Loading, setLoading] = useState(false)
  // console.log(isPhotos)
  var newList = Object.keys(isPhotos)
  console.log(newList)

  useEffect(() => {
    axiosConfig.get('/photos/?client_id=ZgWulLlIrXIAFZBgRlOIV4mJBMBdNLtzyr5ymIsEUZs')
    .then(res => {
      setIsPhotos(res.data)
      setLoading(true)
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

      {!Loading ? (
        <div className="loader" >
        <GridLayoutLoader />
        </div>
      ) : (
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
      )}

    </div>
  );
}

export default App;
