import React from "react"
import Image from "../components/Image"
import { Box, Heading, Center } from "@chakra-ui/react"

const Hero = ({ text, src, alt }) => {
  return (
    <Box w="100%" maxH="80vh" overflow="hidden" position="relative">
      <Box
        bgColor="#333"
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        zIndex="20"
        opacity="0.3"
      />
      <Image src={src} alt={alt} />
      <Center
        position="absolute"
        top={["30px", "50px", "70px"]}
        zIndex="25"
        m={["auto 0", null, "auto 10%"]}
        w={["100%", null, "80%"]}
      >
        <Heading
          as="h1"
          color="white"
          fontSize={["30px", "50px", "70px", "90px", "120px"]}
        >
          {text}
        </Heading>
      </Center>
    </Box>
  )
}

export default Hero
