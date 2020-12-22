import React from 'react';
import '../App.scss'


const PhotoCard = (props) => {
    
    return (
        <div>
            <div>
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
                <div className="image-lightbox" id="lightbox-image-1">
                    <div className="image-lightbox-wrapper">
                    <a href="/#" className="close">.</a>
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