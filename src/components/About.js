import React from "react"
import { Heading, Text, Center } from "@chakra-ui/react"

const About = () => {
  return (
    <Center m="2rem auto" flexDir="column" maxW="1100px">
      <Heading as="h1" size="xl">
        Concepto
      </Heading>
      <Center m={["1.5rem 0.8rem 0 0.8rem"]} flexDir="column">
        <Text fontSize={[null, "2xl"]}>
          Buho es un concepto de restaurante campestre especializado en asados y
          parrilla. Esta conformado por kioskos con capacidad entre 8 - 10
          personas.
        </Text>
        <Text fontSize={[null, "2xl"]}>
          Es un sitio ideal para compartir con familia y amigos con un buen
          asado y en el mejor ambiente campestre de la ciudad
        </Text>
        <Text fontSize={[null, "2xl"]}>prueba</Text>
      </Center>
    </Center>
  )
}

export default About
