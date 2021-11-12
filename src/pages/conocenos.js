import React from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { Box, Text, Center, Heading } from "@chakra-ui/react"
import AvatarGrid from "../components/AvatarGrid"

const ConocenosPage = () => {
  return (
    <>
      <SEO title="conócenos" />
      <Hero text="Conócenos" src="hero4.jpg" alt="foto" />
      <Box m="2rem auto" maxW="1100px">
        <Center m={["1.5rem 0.8rem"]} flexDir="column">
          <Text fontSize={[null, "2xl"]}>
            Buho es un concepto de restaurante campestre especializado en asados
            y parrilla. Esta conformado por kioskos con capacidad entre 8 - 10
            personas.
          </Text>
          <Text fontSize={[null, "2xl"]}>
            Es un sitio ideal para compartir con familia y amigos con un buen
            asado y en el mejor ambiente campestre de la ciudad
          </Text>
        </Center>
        <Center m="2rem">
          <Heading as="h2" size="xl">
            Nosotros
          </Heading>
        </Center>
        <AvatarGrid />
      </Box>
    </>
  )
}

export default ConocenosPage
