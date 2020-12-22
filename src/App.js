import React, {useState, useEffect} from 'react';
import './App.scss';
import PhotoCard from './components/PhotoCard'
import axiosConfig from './helpers/axiosConfig'
import { ReactComponent as SearchIcon } from './svgs/searchIcon.svg';
import GridLayoutLoader from './components/GridLayoutLoader'

function App() {
  // eslint-disable-next-line
  const [error, setError] = useState('');
  const [Loading, setLoading] = useState(false);
  const [isPhotos, setIsPhotos] = useState([]);
  const [filterDisplay, setFilterDisplay] = useState([]);
  // console.log(verifiedFilter)

  useEffect(() => {
    axiosConfig.get('/photos/?client_id=ZgWulLlIrXIAFZBgRlOIV4mJBMBdNLtzyr5ymIsEUZs')
    .then(res => {
      setLoading(true)
      setIsPhotos(res.data)
      setFilterDisplay(res.data)
    },
    (error) => {
      setError(error)
    })
  }, [])


  // search section 
  function filterList (e){
    const updatedList = isPhotos.filter(item => {
      return (
        item.user.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      );
    });
    setFilterDisplay(updatedList)
  };

  return (
    <div className="App">
      <div className="container">
        <div className="photo-section">
          <SearchIcon className="icon" />
          <input 
          onChange={filterList}
          type="text"
          placeholder="Search for photo" />
        </div>
      </div>

      {!Loading ? (
        <div className="loader" >
        <GridLayoutLoader />
        </div>
      ) : (
        <div className="image-list gallery-wrapper">
          {filterDisplay.map((photo, id) => (
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
