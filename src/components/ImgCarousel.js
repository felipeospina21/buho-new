import { Box, Heading, Center } from "@chakra-ui/react"
import React, { useState } from "react"
import Slide from "./Slide"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImgCarousel = () => {
  const [slides] = useState([
    { src: "s1.jpg", alt: "foto" },
    { src: "s2.jpg", alt: "foto" },
    { src: "s3.jpg", alt: "foto" },
    { src: "s4.jpg", alt: "foto" },
    { src: "s5.jpg", alt: "foto" },
    { src: "s6.jpg", alt: "foto" },
    { src: "s7.jpg", alt: "foto" },
    { src: "s8.jpg", alt: "foto" },
    { src: "s9.jpg", alt: "foto" },
  ])
  return (
    <Box w="100%" maxW="1300px" margin="2rem auto">
      <Center mb="2rem">
        <Heading as="h1" size="xl">
          Fotos
        </Heading>
      </Center>
      <Carousel
        autoPlay="true"
        // autoFocus="true"
        centerMode={false}
        infiniteLoop="true"
        // centerSlidePercentage={95}
        interval={5000}
      >
        {slides.map(slide => {
          const { src, alt } = slide
          return <Slide src={src} alt={alt} />
        })}
      </Carousel>
    </Box>
  )
}

export default ImgCarousel
