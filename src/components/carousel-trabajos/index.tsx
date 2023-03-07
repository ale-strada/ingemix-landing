import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const FotoContainer = styled.div`
height:180px;
max-width:250px;
border:solid 2px black;
`
const CarouselItemContainer = styled.div`
max-width:650px;
margin: 20px auto;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
`

export function CarouselTrabajos() {
const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex:any, e:any) => {
    setIndex(selectedIndex);
};

return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <CarouselItemContainer>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
            </CarouselItemContainer>
            <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItemContainer>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
                <FotoContainer/>
            </CarouselItemContainer>
            <Carousel.Caption/>
        </Carousel.Item>
    </Carousel>
);
}
