import React from 'react';
import '../index.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div className="search result image">{images}</div>
};

export default ImageList;