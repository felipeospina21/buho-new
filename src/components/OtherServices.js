import React, { useState } from "react"
import { Box, Center, Heading, Text } from "@chakra-ui/react"
import ImgGrid from "./ImgGrid"

const OtherServices = () => {
  const [buhoImagesList] = useState([
    { src: "1.jpg", alt: "imagen" },
    { src: "2.jpg", alt: "imagen" },
    { src: "3.jpg", alt: "imagen" },
    { src: "4.jpg", alt: "imagen" },
    { src: "5.jpg", alt: "imagen" },
    { src: "7.jpg", alt: "imagen" },
  ])
  return (
    <Box m="2rem auto" maxW="1300px">
      <Center flexDir="column">
        <Heading as="h1" size="xl" mb="1rem">
          Otros Servicios
        </Heading>
        <Text>
          También ofrecemos otros servicios de diversión adicionales para que
          todos los miembros de tu familia se puedan divertir
        </Text>
      </Center>
      <ImgGrid imgList={buhoImagesList} />
    </Box>
  )
}

export default OtherServices
