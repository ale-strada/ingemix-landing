import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const FotoContainer = styled.div`
height:180px;
max-width:250px;
`
const ImgCarousel = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
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
                <FotoContainer>
                    <ImgCarousel src="/img/carousel1.jpg" alt="" />
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel2.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel3.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel4.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel5.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel6.jpg' alt=''/>
                </FotoContainer>
            </CarouselItemContainer>
            <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItemContainer>
                <FotoContainer>
                    <ImgCarousel src="/img/carousel7.jpg" alt="" />
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel8.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel9.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel10.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel11.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel12.jpg' alt=''/>
                </FotoContainer>
            </CarouselItemContainer>
            <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item>
            <CarouselItemContainer>
                <FotoContainer>
                    <ImgCarousel src="/img/carousel13.jpg" alt="" />
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel14.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel15.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel16.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel17.jpg' alt=''/>
                </FotoContainer>
                <FotoContainer>
                    <ImgCarousel src='/img/carousel18.jpg' alt=''/>
                </FotoContainer>
            </CarouselItemContainer>
            <Carousel.Caption/>
        </Carousel.Item>
    </Carousel>
);
}
