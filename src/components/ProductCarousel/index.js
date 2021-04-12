import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

const index = ({images}) => {
    return (<div className="product-carousel">
        <Carousel
            className="carousel"
            emulateTouch={true}
            autoPlay={false}
            showThumbs={false}
            showArrows={false}
        >
            { Array.isArray(images) && images.map((img, i) => {
                return <div key={"clothes" + i}>
                    <img src={img} alt="clothes" />
                </div>
            }) }
        </Carousel>
    </div>);
}

export default index;

