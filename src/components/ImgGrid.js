import React from "react"
import { Box, SimpleGrid, Center } from "@chakra-ui/react"
import Image from "./Image"

const ImgGrid = ({ imgList }) => {
  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={2} m="2rem auto">
      {imgList.map(img => {
        return <ImageContainer key={img.src} src={img.src} alt={img.alt} />
      })}
    </SimpleGrid>
  )
}

export default ImgGrid

export const ImageContainer = ({ src, alt }) => (
  <Center>
    <Box h="320px" w="320px" overflow="hidden">
      <Image src={src} alt={alt} />
    </Box>
  </Center>
)
