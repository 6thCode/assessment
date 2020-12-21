import React from 'react';
import '../App.scss'


const PhotoCard = (props) => {
    
    function pickContent() {
        // let photoID = document.getElementById("photo_id").innerHTML
        let photoName = document.getElementById("photo_name").innerHTML
        console.log(photoName)
        
        let delayTimer = setTimeout(function() {
            // document.getElementById("photo_ids").innerHTML = photoID;
            document.getElementById("photo_name").innerHTML = photoName;
            clearTimeout(delayTimer)
        },1000)  
    }
    
    return (
        <div>
            <div
            onClick={pickContent}
             className="">
                <div className="image-wrapper">
                    <a href="#lightbox-image-1">
                    <img src={props.image} alt="img" />
                    <div className="image-title">
                        <h5 id="photo_name">{props.name}</h5>
                        <p>{props.details}</p>
                    </div>
                    </a>
                </div>
            </div>

            <div className="gallery-lightboxes">
            <p id="photo_ids"></p>
                <div className="image-lightbox" id="lightbox-image-1">
                    <div className="image-lightbox-wrapper">
                    <a href="/#" className="close"></a>
                    <img src={props.image} alt="img" />
                    <div className="image-title">
                        <h5>{props.name}</h5>
                        <p>{props.details}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;