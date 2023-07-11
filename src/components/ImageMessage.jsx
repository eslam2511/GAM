import React from 'react';
import '../style/ImageMessage.css'
const ImageMessage = ({images}) => {

    return (
        <div className="imageContainer">
            <a target='blank' href={images[0]}><img src={images[0]} alt="GeneratedImage" /></a>
            <a target='blank' href={images[1]}><img src={images[1]} alt="GeneratedImage" /></a>
            <a target='blank' href={images[2]}><img src={images[2]} alt="GeneratedImage" /></a>
            <a target='blank' href={images[3]}><img src={images[3]} alt="GeneratedImage" /></a>
        </div>
     );
}
 
export default ImageMessage;